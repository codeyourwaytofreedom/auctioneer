require ("dotenv").config();



//basic configuration
const express = require('express'); 
const app = express();
const cors = require('cors');
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

 
//token operation and parsers
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 9000;

// to parse request object when receiving post request
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()

app.use(cookieParser());
//app.use(express.json());
app.use(cors({ origin: true, credentials: true }));


const stripe = require("stripe")(process.env.PAYMENT_KEY)

const {categories} = require("/Users/waytofreedom/Desktop/auctioneer/backend/dummy/dummy.js");

// to send images to the client side
app.use(express.static(__dirname+'/images'));





let db;
const { connectToDb, getDb } = require("./db");
connectToDb( (err) => {
        if(!err){
          server.listen(port, () => {console.log(`Listening on port ${port}`)}); //Line 6
          //stored an instance of database after successful connection
          db = getDb();
        }
})


//socket
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});




// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  let results = [];
   db.collection('auctioneer').find()
        .forEach (auc => results.push(auc))
        .then(() => {
            console.log(results);
            res.json(results)
          })
});

// create a POST route 
app.patch("/edituser",jsonParser, (req, res) => {
  if(req.body.old_password)
  {
    db.collection("auctioneer").updateOne({email:req.body.user_email, password:req.body.old_password }, {$set: {password: req.body.new_password}}).then(
      auc =>{ 
              console.log(auc)
              if(auc.modifiedCount ===1)
                {
                  res.send(true)
                }
                else{
                  res.send(false)
                }
            }
    )
    console.log("Request received for password update")
  }
  if(req.body.user_to_be_edited)
  {
    console.log(req.body.user_to_be_edited)
    console.log(req.body.user_email)
    db.collection("auctioneer").updateOne({email:req.body.user_email}, {$set: {username:req.body.user_to_be_edited}})
    .then(
      auc => 
        {
          if(auc.modifiedCount ===1)
          {
            res.send(true)
          }
          else{
            res.send(false)
          }
        }
    ).catch(err=> {res.send(err)})
  }

})



//Post route to receive form data for resgistering new acutioneer
app.post('/express_backend', jsonParser, (req, res) => {
      if(req.body.auctioneer)
      {
        console.log("Register form data received")
        console.log(req.body.auctioneer)
        //db.collection('auctioneer').insertOne(req.body.auctioneer);

        db.collection('auctioneer').findOne({email:req.body.auctioneer.email}).then(doc => {
          console.log(doc)
          if(!doc)
          {
            res.send("notin")
            db.collection('auctioneer').insertOne(req.body.auctioneer);
          }
          else{
            res.send("in")
          }
        })
      }
})


//Post route to handle login
app.post('/login',jsonParser, (req, res) => {

           db.collection('auctioneer').findOne({email:req.body.user_loggingin.email, 
                                                password: req.body.user_loggingin.password}).then(doc => {
            //console.log(doc)
            if(!doc)
            {
              res.send("notin")
            }
            else{
              const access_token = jwt.sign({id: doc.id, isAuthorized_to_bid: true}, "codeyourwaytofreedom", {
                expiresIn: 60*60
              })
              res.cookie("jwt", access_token, {
                httpOnly:true,
                secure: true,
                sameSite: "None",
                maxAge: 10000 * 60 * 60 * 24
              })
              res.send({email: doc.email, username: doc.username})
            }
          })   
  })



app.get("/cook",( req, res) => {
  //console.log(req.cookies)
  res.send(req.cookies)
})


app.get("/userauth",( req, res) => {
  const token = req.cookies.jwt;
  if(token){
      jwt.verify(token, "codeyourwaytofreedom", (err, decodedJwt) => {
        if(err){
          console.log(err.message)
          res.send(false)
        }
        else{
            res.send("jwt available and verified")
            //console.log("request received for verification")
        }
      })
  }
  else{
    res.send(false)
    console.log("failed verification attempt")
  }
  //console.log(token)
})

app.get("/logout", (req, res) => {
  res.cookie("jwt", "", {maxAge:1})
  res.send("logged out with fake jwt")
})


app.get("/category", (req, res) => {
  if(req.headers.query)
  {res.sendFile(`/Users/waytofreedom/Desktop/auctioneer/backend/cats/${req.headers.query}.jpg`);}
})

app.get("/item", (req, res) => {
  //console.log(req.headers.auctioned);
  res.sendFile(`/Users/waytofreedom/Desktop/auctioneer/backend/images/${req.headers.auctioned}.jpg`);
})

function RandomSeat(max) {
  return Math.floor(Math.random() * max);
}

app.get("/getimages", (req, res) => {
  //console.log(req.headers.auctioned)
  const availability = [];
  for (let i = 0; i < 10; i++) {
    availability.push(RandomSeat(2))
  }
  res.send([categories.find(c => c.item_id === req.headers.auctioned).images, availability])
})


// lets go with async way this time
app.post("/checkout", async (req, res) => {
  try {
    //console.log("this is params", req.headers.auctioned)
    const session = await stripe.checkout.sessions.create({
      "payment_method_types": [
        "card"
      ],
      "mode": "payment",
      "currency": "gbp",
      "line_items": [{
          price_data: {
            currency:"gbp",
            product_data: {name:"Auction Attendance Fee"},
            unit_amount: 600
          },
          quantity: 1
        }],
      "success_url": `${process.env.SERVER_URL}/checkout-success`,
      "cancel_url": `${process.env.SERVER_URL}/bidding/${req.headers.auctioned}`,
    })
    res.send(session.url)
  }
  catch {
    res.send("Oops! Something went wrong..")
  }
})


app.post('/webhook',express.raw({type: 'application/json'}), async (request, response) => {
  const payload = request.body;
  /* console.log(request.headers)
  console.log(request.headers['stripe-signature']) */
  
  let event;
  const sig_header = request.headers['stripe-signature']

  try {
    event = stripe.webhooks.constructEvent(request.body, sig_header, process.env.SECRETKEY_WEBHOOK);
    //console.log(event)
    //console.log(event.data.object.id)
    //console.log(event.status)
    //console.log(event.data.object.status)
  } 
  catch (err) {
    console.log(err.message)
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    console.log("transaction done")
    const session = event.data.object
    console.log(session)
  }

  response.status(200);
});



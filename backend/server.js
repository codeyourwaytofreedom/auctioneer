require ("dotenv").config();



//basic configuration
const express = require('express'); 
const app = express();
const cors = require('cors');

//token operation and parsers
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 9000;

// to parse request object when receiving post request
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));


const stripe = require("stripe")(process.env.PAYMENT_KEY)
const fees = new Map(
  [
   {fee_attendance: 6000}
  ],
  [
   {fee_deposit:300000}
  ]
)


const {categories} = require("/Users/waytofreedom/Desktop/auctioneer/backend/dummy/dummy.js");

// to send images to the client side
app.use(express.static(__dirname+'/images'));


let db;
const { connectToDb, getDb } = require("./db");
connectToDb( (err) => {
        if(!err){
          app.listen(port, () => {console.log(`Listening on port ${port}`)}); //Line 6
          //stored an instance of database after successful connection
          db = getDb();
        }
})



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
app.post('/login', (req, res) => {

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
              res.send({token: access_token})
            }
          })   
  })



app.get("/cook",( req, res) => {
  console.log(req.cookies)
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
            console.log("request received for verification")
        }
      })
  }
  else{
    res.send(false)
    console.log("failed verification attempt")
  }
  console.log(token)
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
  console.log(req.headers.auctioned);
  res.sendFile(`/Users/waytofreedom/Desktop/auctioneer/backend/images/${req.headers.auctioned}.jpg`);
})

function RandomSeat(max) {
  return Math.floor(Math.random() * max);
}

app.get("/getimages", (req, res) => {
  console.log(req.headers.auctioned)
  const availability = [];
  for (let i = 0; i < 10; i++) {
    availability.push(RandomSeat(2))
  }
  res.send([categories.find(c => c.item_id === req.headers.auctioned).images, availability])
})


// lets go with async way this time
app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      "payment_method_types": [
        "card"
      ],
      "mode": "payment",
      "currency": "gbp",
      "line_items": [{
          price_data: {
            currency:"gbp",
            product_data: {name:"Aution Attendance Fee"},
            unit_amount: 600
          },
          quantity: 1
        }],
      "success_url": "https://example.com/success",
      "cancel_url": "https://example.com/cancel",
    })
    res.send(session.url)
  }
  catch {
    res.send("Oops! Something went wrong..")
  }
  
})
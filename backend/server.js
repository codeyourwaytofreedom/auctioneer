const express = require('express'); //Line 1
const app = express(); //Line 2
const cors = require('cors');
app.use(cors());

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const port = process.env.PORT || 9000; //Line 3


// to parse request object when receiving post request
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()





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
app.post('/login', jsonParser, (req, res) => {

          console.log(req.body.user_loggingin.email)
  
           db.collection('auctioneer').findOne({email:req.body.user_loggingin.email, 
                                                password: req.body.user_loggingin.password}).then(doc => {
            console.log(doc)
            if(!doc)
            {
              res.send("notin")
            }
            else{
              //res.send("in")
              /* const access_token = jwt.sign({id: doc.id, isAuthorized_to_bid: true}, "codeyourwaytofreedom", {
                expiresIn: 60*60
              }) */
              res.setHeader("Postcookie", "Post cookie", {httpOnly:true})
              //res.json(access_token)
              res.json("token sent from post request")
            }
          })   
  })


  app.get("/cook", jsonParser,( req, res) => {
    //res.setHeader("Set-Cookie", "avutioneer=true")
    /* const access_token = jwt.sign({id: 5555, isAuthorized_to_bid: true}, "codeyourwaytofreedom", {
                expiresIn: 60*60
              })
    res.cookie("jwt", access_token, {httpOnly:true}) */
    res.cookie("Cookie", "First cookie", {httpOnly:true})
    res.send("first cookie")
  })

  app.get("/seecook", jsonParser,( req, res) => {
    const cookies = req.cookies
    console.log(cookies)
    console.log(7)
  })
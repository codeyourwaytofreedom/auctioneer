const express = require('express'); //Line 1
const app = express(); //Line 2

const port = process.env.PORT || 9000; //Line 3

/* const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/members", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
}); */



let db;

const { connectToDb, getDb } = require("./db");
connectToDb( (err) => {
        if(!err){
          // This displays message that the server running and listening to specified port
          app.listen(port, () => {console.log(`Listening on port ${port}`)}); //Line 6
          db = getDb();
        }
})



// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  let results = [];
   db.collection('auctioneer').find()
        .forEach (auc => results.push(auc))
        .then(() => console.log(results))

   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11
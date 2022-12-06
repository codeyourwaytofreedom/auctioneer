const express = require('express'); //Line 1
const app = express(); //Line 2

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 9000; //Line 3


// to parse request object when receiving post request
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()





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
        .then(() => {
            console.log(results);
            res.json(results)
          })
});

app.post('/express_backend', jsonParser, (req, res) => {
    console.log(req.body.url)
})
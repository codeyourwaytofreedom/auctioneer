
const { MongoClient } = require("mongodb");

let dbConnection;


module.exports = {
    connectToDb: (do_after_connection) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/members')
            .then((client)=> {
                dbConnection = client.db()
                return do_after_connection()
            }).catch(err => {
                console.log(err)
                return do_after_connection(err)
            })
    },
    getDb: () => dbConnection
}
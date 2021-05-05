var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url1 = "mongodb://mongo2:27017/mongo1";


// Create DB
MongoClient.connect(url1, function(err, db) {
    if (err) throw err;
    db.db("mongo2").dropDatabase();
    console.log("Database Killed!");
    db.close()
});
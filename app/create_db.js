var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url1 = "mongodb://localhost:27017/mydb";
var url = "mongodb://localhost:27017/";


// Create DB
MongoClient.connect(url1, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

// Create Collection (Should be a seperate file, or not do anything if DB exists)
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }); 


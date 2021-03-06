'use strict';
var MongoClient = require('mongodb').MongoClient;
// Create a database named "mydb":
var url1 = process.env.URL1;
var url = process.env.URL;


// Create DB
MongoClient.connect(url1, function(err, db) {
  if (err) throw err;
  console.log('Database created!');
  db.close();
});

// Create Collection
// (Should be a seperate file, or not do anything if DB exists)

MongoClient.connect(url, function(err, db) {
  if (err){
    console.log(err);
  }
  var dbo = db.db('mydb');
  dbo.createCollection('transactions', function(err, res) {
    if (err){
      console.log(err);
    }
    console.log('Collection created!');
    db.close();
  });
});



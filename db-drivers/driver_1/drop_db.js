'use strict';
var MongoClient = require('mongodb').MongoClient;
// Create a database named "mydb":
var url1 = 'mongodb://mongo:27017/mongo2';


// Create DB
MongoClient.connect(url1, function(err, db) {
  if (err) throw err;
  db.db('mongo1').dropDatabase();
  console.log('Database Killed!');
  db.close();
});

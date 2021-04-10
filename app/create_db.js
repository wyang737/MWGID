var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url1 = "mongodb://localhost:27017/mydb";
var url = "mongodb://localhost:27017/";
var assert = require('assert');
var name1;

MongoClient.connect(url1, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }); 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}); 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        name1 = result.name;
        console.log(name1);
        db.close();
    });
}); 

  
describe('DB Query', function() {
    describe ('First person\'s name who lives at Highway 37', function(){
        it('should return Company Inc', function(){
            assert.equal(name1, "Company Inc");
        });
    });
}); 
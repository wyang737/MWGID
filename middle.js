var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
/*
Object.size = (object) => {
	var size = 0;
	for (key in object)
	{
		if (object.hasOwnProperty(key))
			size ++;
	}
	return size;
};

// adding transactions
var fakeRequest1 = '{"userid":"NileshMukherji", "recipid": "WinstonYang","data": "PAID 100"}'
var fakeRequest2 = '{"userid":"NileshMukherji", "recipid": "BrianGuo","data": "PAID 150"}'
// query request
var fakeRequest3 = '{"userid":"NileshMukherji"}'

var obj = JSON.parse(fakeRequest1);

if (Object.size(obj) == 3) // adding a new transaction
{
	if (counter % 2 == 0) // even transaction, add to db1
	{
		MongoClient.connect(url1, (err, db1) => {
			if (err) throw err;
		    var dbo = db1.db("mydb");
		    dbo.collection("transactions").insertOne(obj, function(err, res) {
		        if (err) throw err;
		        console.log("1 transaction inserted");
		        db.close();
	    	});
		});
	}
	else // odd transaction, add to db2
	{
		MongoClient.connect(url2, (err, db2) => {
			if (err) throw err;
		    var dbo = db2.db("mydb");
		    dbo.collection("transactions").insertOne(obj, function(err, res) {
		        if (err) throw err;
		        console.log("1 transaction inserted");
		        db.close();
	    	});
		});
	} 
	counter ++;
}
else if (Object.size(obj) == 1) // query
{
	console.log("it's a query");
}
else
{
	console.log("something's not right!!");
} */
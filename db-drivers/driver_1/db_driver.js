var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017/";
var assert = require('assert');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
console.log("\n\n\n\n\nwe r corsing!!!!!!!!!\n\n\n");
const LOCAL_PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var mongoose = require('mongoose');

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
var db;
var routes = require('./routes/routes');

mongoose.Promise = global.Promise;
// mongoose.connect(url); 

MongoClient.connect('mongodb://mongo:27017/mongo1', function(err, database) {
    if (err) {
        throw err;
    }
    else {
        db = database;        
    }
});


// make our db accessible to our router
app.use(function(req, res, next) {
	// req.db = db;
  req.test = "Hello1";
  req.db = db.db("mongo1");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	next();
});



function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}
require('./routes/routes.js')(app);
app.listen(LOCAL_PORT, function() {
	console.log('Express server listening on port ' + LOCAL_PORT);
});


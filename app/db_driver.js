var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var assert = require('assert');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const LOCAL_PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
var db;
var routes = require('./routes/routes');

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    else {
		db = database;
		console.log("Connected to db!");
	}
});


// make our db accessible to our router
app.use(function(req, res, next) {
	req.db = db;
	next();
});



function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}
require('./routes/routes.js')(app);
app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


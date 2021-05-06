var assert = require('assert');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
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
var request;
var routes = require('./routes/routes');

mongoose.Promise = global.Promise;
// mongoose.connect(url); 

request = require('request');

// make our db accessible to our router
app.use(function(req, res, next) {
  req.test = "Hello1";
  req.request = request;
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


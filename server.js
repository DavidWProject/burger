// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");
// var fs = require("fs");

// Set our port to 8080
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTER
require('./apiRoutes.js')(app); 
require('./htmlRoutes.js')(app);

// // Starts our server.
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

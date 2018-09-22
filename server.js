// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
// var http = require("http");
// var fs = require("fs");

// Set our port to 8080
var PORT = process.env.PORT || 8080;
var app = express();


// Sets up the Express app to handle data parsing
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

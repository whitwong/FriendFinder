// Required Packages and Libraries
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");

// Middleware - Interprets data sent to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes - Require modules from apiRoutes.js and htmlRoutes.js
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});
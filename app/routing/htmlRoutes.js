// Required Packages and Libraries
var path = require("path");

// Routes - Code to handle selecting links to html pages
module.exports = function(app){
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};
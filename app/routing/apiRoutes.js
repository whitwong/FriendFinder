// Required Packages and Libraries
var friendsData = require("../data/friends");

// Routes
module.exports = function(app){
	// GET method. Send friendsData to display when routed to /api/friends
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	// POST method.
	app.post("/api/friends", function(req, res){
		// Push new information to friendsData array.
		var lastEntry = req.body;
		lastEntry.scores = lastEntry.scores.map(num => parseInt(num));
		friendsData.push(lastEntry);

		// Logic for determining best match
		var reduceArr = [];
		for (var j=0; j<(friendsData.length-1); j++){
			var diffArr = [];
			for (var i=0; i<friendsData[0].scores.length; i++){
				var diff = Math.abs(lastEntry.scores[i] - friendsData[j].scores[i]);
				diffArr.push(diff);
			}
			var reduceNum = diffArr.reduce((a,c) => a+c);
			reduceArr.push(reduceNum);
			// console.log(diffArr);
			// console.log(reduceNum);
		}
		// console.log(reduceArr);
		// console.log(reduceArr.indexOf(Math.min(...reduceArr)));
		// console.log("----------------------------------------------------------");
		var bestFriendIndex = reduceArr.indexOf(Math.min(...reduceArr));
		res.json(friendsData[bestFriendIndex]);
	});
};
//Load Data
var friends = require("../data/friends");

//Routing
module.exports = function(app) {
    
    //api GET requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //api POST request
    //compatability logic goes here
    app.post("/api/friends", function(req, res) {
        
        var newFriend = req.body;
        //loop through score to make an array of num instead of strings
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        };
        
        //default match to first friend but will change after function loops through to find minimum difference
        var newBestieIndex = 0;
        //max score is 50, minimum is 10, set difference to max and compare after loop
        var scoreDifference = 40;

        //loop through the friends data
        for (var i = 0; i < friends.length; i++) {
            var friendScoreDifference = 0;
            //loop through individual score
            for (var j = 0; j < friends[i].scores.length; j++) {
                var comparedScoreDifference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                friendScoreDifference += comparedScoreDifference;
            }

            //if there is a new low score difference, change bestie index
            if (friendScoreDifference < scoreDifference) {
                newBestieIndex = i;
                scoreDifference = friendScoreDifference;
            }
        };

        //post user to friends array
        friends.push(req.body);

        //send bestie with lowest difference to the page
        res.json(friends[newBestieIndex]);
        console.log(friends[newBestieIndex]);
        console.log(scoreDifference);
    });
};
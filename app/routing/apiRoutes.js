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
        //post user to friends array
        friends.push(req.body);

        var newFriend = req.body;
        console.log(newFriend);


        res.json(true);
    });
};
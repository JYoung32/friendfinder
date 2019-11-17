//Load Data
var friends = require("../data/friends");

//Routing
module.exports = function(app) {
    
    //api GET requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //api POST request
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });
};
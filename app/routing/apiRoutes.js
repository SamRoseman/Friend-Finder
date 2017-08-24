var friendsData = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api", function(req, res) {
//loop through my array and pick a friend
//define new friend
        friendsData.push(req.body);
//res.json the new friend

    })

}

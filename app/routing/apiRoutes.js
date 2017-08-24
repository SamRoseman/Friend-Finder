var friendsData = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api", function(req, res) {
        friendsData.push(req.body);
    })

}

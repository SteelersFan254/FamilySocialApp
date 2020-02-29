const db = require("../models");

module.exports = function (app) {

    app.post("/api/home", function (req, res) {
        console.log("reachingbackend")
        db.Comment.create(
            req.body
        ).then(function(results) {
            res.json(results);
            console.log("POSTY BITCH")
        });
    });

    app.get("/api/home", function(req, res) {
        db.Comment.findAll({
        }).then(function(results) {
            res.json(results);
        });
    });
}
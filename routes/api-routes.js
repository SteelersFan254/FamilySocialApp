// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios");
    app.post("/api/home", function (req, res) {
        db.Comment.create({
            comment: req.body
        }).then(function(){
            res.json(req.body);
        }).catch(function(err) {
            res.send(err)
        })

    })

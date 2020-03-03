const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();
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

    app.get("/api/auth/signup", function(req, res) {
        db.Stupid.findAll({
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/auth/signup", function (req, res) {
        db.Stupid.create(
            req.body
        ).then(function(results) {
            res.json(results);
            console.log("posted")
        });
    });





    router.post("/signup", function(req, res){
        db.Stupid.create(req.body).then(dbUser => {
            res.json(dbUser.email);
        }).catch(err => {
            console.log(err);
        })
    })
    
    router.post("/signin", passport.authenticate("local"), (req, res) => {
        res.json(req.user.email);
    })
    
    router.get("/signout", (req, res) => {
        req.logout();
        res.sendStatus(200);
    });
}
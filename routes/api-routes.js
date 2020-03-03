const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated.js")



module.exports = function (app) {

    app.post("/api/home", function (req, res) {
        console.log("reachingbackend")
        db.Comment.create(
            req.body
        ).then(function (results) { 
            res.json(results);
            console.log("POSTY BITCH")
        });
    });

    app.get("/api/home", function (req, res) {
        db.Comment.findAll({
        }).then(function (results) {
            res.json(results);
        });
    });

    // app.get("/api/auth/signup", function(req, res) {
    //     console.log(req.body);
    //     db.Stupid.findAll({
    //     }).then(function(results) {
    //         res.json(results);
    //     });
    // });

    app.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
        console.log("test");
        res.json(req.user);
    })

    app.post("/api/auth/signup", function (req, res) {
        const hash = bcrypt.hashSync(req.body.password, 10)
        db.Stupid.create(
            Object.assign(req.body, { password: hash})
        ).then(function (results) {
            res.json(results.authorize());
            console.log("posted")
        });
    });

    app.get("api/signout", (req, res) => {
        req.logout();
        res.sendStatus(200);
    });

    app.get("/profile", isAuthenticated, (req, res) => {
        console.log(req)
        console.log("backened")
        db.Stupid.findOne({where: { email: req.email }}).then(dbUser => {
            console.log(dbUser)
        })
    })

    ///////////////


}
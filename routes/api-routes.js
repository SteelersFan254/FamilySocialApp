const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated.js")



module.exports = function (app) {

  app.post("/api/home", function (req, res) {
    console.log(req.user);
    console.log("reachingbackend")
    db.Comment.create({
      comment: req.body.comment,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      StupidId: req.user.id
    }
    ).then(function (results) {
      res.json(results);
      console.log("POSTY BITCH")
    });
  });

  //all the comments
  app.get("/api/home", function (req, res) {
    db.Comment.findAll({
      order: [["createdAt"]],
      include: [db.Stupid]
    }).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/auth/signout", (req, res) => {
    req.logout();
    res.sendStatus(200);
  });

  app.get("/contacts", function (req, res) {
    console.log("getting contacts to the backend");
    db.Stupid.findAll({
    }).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
    console.log("test");
    res.json(req.user);
  })

  app.post("/api/auth/signup", function (req, res) {
    const hash = bcrypt.hashSync(req.body.password, 10)
    db.Stupid.create(
      Object.assign(req.body, { password: hash })
    ).then(function (results) {
      res.json(results);
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
    db.Stupid.findOne({ where: { email: req.email } }).then(dbUser => {
      console.log(dbUser)
    })
  })

  ///////////////


}
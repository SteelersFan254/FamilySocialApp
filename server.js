// Requiring necessary npm packages
require("dotenv").config();
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models/");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/api-routes.js")(app);
// require("./routes/review-api-routes")(app);


if(process.env.NODE_ENV === "production"){  
    app.use("*", function(req, res){
        res.sendFile("client/build/index.html")
    })
}

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: process.env.FORCE_DB==="true"}).then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

// module.export = parser;


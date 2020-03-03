const isAuthenticated = require("./config/middleware/isAuthenticated");
const authRoutes = require("./routes/authRoutes");
const path = require("path");

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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/public'))
}

app.get("/api/hello", function(req, res){
    res.send("hello world! Welcome!");
})

app.use("/api/auth/", authRoutes);

// Create a route, that will only work for logged in users
app.get('/api/user/me', isAuthenticated, (req, res) => {
    res.json({
        email : req.user.email
    })
});

app.get('/api/secret/number', isAuthenticated, (req, res) => {
    res.json(7);
});

app.use("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
})


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

// module.export = parser;


const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Stupid } = require("../models");

passport.use(new LocalStrategy({ usernameField: "email" }, function(email, password, done){
    console.log("VALIDATING");
    console.log("EMAIL", email);
    Stupid.findOne({where: { email: email }}).then(dbUser => {
        console.log(dbUser.firstName)
        if(!dbUser){
            return done(null, false, {message: "Incorrect username or password"})
        } else {
            //console.log(dbUser);
            console.log(password);
            dbUser.checkPassword(password).then(isMatch => {
                if(isMatch){
                    return done(null, dbUser)
                } else {
                    return done(null, false, {message: "Incorrect username or password"})
                }
            })
        }
    }).catch(err => console.log(err))
}))

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;
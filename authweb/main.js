const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const session = require('express-session') //views middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//passport initilization 
app.use(express.static('public'));
//app.use(express.cookieParser()); 
//app.use(express.bodyParser()); 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//passport fb middleware 
passport.use(new FacebookStrategy({
    clientID: 1726410697373667,
    clientSecret: '63e8074e48cbce8f8a6a0cbcfcc60097',
    callbackURL: "http://localhost:3003/auth/facebook/callback"
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

//serialize/de session 
passport.serializeUser(function (user, done) {
    //var sess = req.session  
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
//check if user is logged in 
function isUserLogged(req, res, next) {
    // if user is authenticated in the session, carry on    
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page    
    res.redirect('/');
}

//fb callback 
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/accounts',
    failureRedirect: '/login'
}));
app.get('/', function (req, res) {
    res.render('home');
});

//protected 
route app.get('/accounts', isUserLogged, function (req, res) {
    console.log(req.user);
    res.render('accounts', {
        name: req.user.displayName
    });
});
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.listen(3000);
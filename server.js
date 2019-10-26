const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportSetup = require('./config/passport-setup.js');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');

let user = {};

const PORT = process.env.PORT || 8080;

const app = express();

// create cookie session that expires in a day
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


// Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
});

// Google auth routes
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

// Github auth routes
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/profile');
});

app.get('/user', (req, res) => {
    console.log("getting user data");
    res.send(user);
});

app.get('/auth/logout', (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});
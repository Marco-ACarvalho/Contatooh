var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {

    passport.use(new GitHubStrategy({
        clientID: 'SEU CLIENT ID',
        clientSecret: 'SEU CLIENT PASSWORD',
        callbackURL: 'SUA REDIRECT_URI'
    }, function(accessToken, refreshToken, profile, done) {

    }));
};
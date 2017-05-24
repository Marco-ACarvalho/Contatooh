var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: 'a66aef0bb5deab8f9aa9',
        clientSecret: '41fc41341310ffa7dd9bbe59d8a8ad7ebb3fede6',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {

        Usuario.findOrCreate(
            {login: profile.username},
            {nome: profile.username},
            function(erro, usuario) {
                if(erro){
                    console.log(erro);
                    //acabou o processo de registro, COM erro
                    return done(erro);
                }
                //acabou o processo, SEM erro
                return done(null, usuario)
            }
        );

    }));

    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done){
        Usuario.findById(id).exec().then(
            function(usuario){
                done(null, usuario);
            }
        );
    });
};
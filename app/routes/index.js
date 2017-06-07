module.exports = function(app) {
    app.get('/', function(req, res){
    	var login = '';
    	if(req.user){
            login = req.user.login;
        }
		res.render('index', {usuarioLogado: login});
<<<<<<< HEAD
        //console.log(res);
=======
>>>>>>> 0d69e88355be741a0b79b3303af95d11677fb336
    });
}
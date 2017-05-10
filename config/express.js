var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	
	app.use(express.static('./public'));
	
	app.set('view engine','ejs');
	app.set('views','./app/views');
	
	//home(app);
	load('controllers', {cwd: 'app'})
		.then('routes')
		.into(app);
	
	return app;
};
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var helmet = require('helmet');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	
	app.use(express.static('./public'));
	
	app.set('view engine','ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	app.use(cookieParser());

	app.use(session(
		{
			secret: 'homem avestruz',
			resave: true,
			saveUninitialized: true
		}
	));
	
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(helmet());

	//esconde a ferramente em que o site foi feito
	//app.disable('x-powered-by');

	//Fala que o site foi feito em outra ferramenta		
	app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14'}));

	//Evitando o 'encaixamento' do site dentro de um iframe
	app.use(helmet.frameguard());

	//Evita a injeção de scripts maliciosos apontando para sites de terceiros
	app.use(helmet.xssFilter());

	//Evita que o navegador tente adivinhar por conta propria
	//o tipo de arquivo que está sendo enviado pra ele. Por exemplo,
	//um arquivo .txt que contem um codigo.js, o navegador não
	//ira tentar executa-lo
	app.use(helmet.noSniff());

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
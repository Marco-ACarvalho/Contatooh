angular.module('contatooh',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/contatos',{
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });

        $routeProvier.when('/contato/:contatoId', {
            templeteUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });

        $routeProvider.otherwise({redirectTo: '/contatos'});
    });
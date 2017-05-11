angular.module('contatooh').controller('ContatoController',
      function($scope, $routeParams, $resource) {
      
            var mensagem = {};

            var Contato = $resource('contatos/:id');

            Contato.get({id: $routeParams.contatoId},
                  function(contato){
                        $scope.contato = contato;
                  },
                  function(erro){
                        $scope.mensagem = {
                              texto: 'Não foi possivel obter o contato',
                              classe: 'danger'
                        };
                        console.log(erro);
                  }
            );

      });
angular.module('contatooh').controller('ContatoController',
      function($scope, $routeParams, $resource, Contato) {
      
            var mensagem = {};

            if($routeParams.contatoId){
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
            } else {
                  $scope.contato = new Contato(); //cria um novo contato
            }

            $scope.salva = function() {
                  $scope.contato.$save().then(
                        function() {
                              mensagem = {
                                    texto: 'Contato salvo com sucesso',
                                    classe: 'info'
                              };
                              // Limpa o formulário
                              $scope.contato = new Contato();
                        },
                        function(erro) {
                              mensagem = {
                                    texto: 'Não foi possível salvar o contato',
                                    classe: 'danger'
                              };
                              console.log(erro);
                        }   
                  );
            }
            
            Contato.query(function(contatos){
                  $scope.contatos = contatos;
            });

      });
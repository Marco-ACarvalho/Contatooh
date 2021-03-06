angular.module('contatooh').controller('ContatosController',
    function($scope, $resource, Contato) {

        $scope.mensagem = {};

        buscaContatos = function(){
            Contato.query(
                function(contatos) {
                    $scope.contatos = contatos;
                },
                function(erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possivel carregar a listra de contatos',
                        classe: 'danger'
                    };
                    console.log(erro);
                }
            );
        };

        //Carrega os dados iniciais da pagina
        buscaContatos();

        $scope.remover = function(contato){
            var nomeDel = contato.nome;
            var idDel = contato._id;
            Contato.delete({id: idDel},
                function() { //Callback se der certo
                    $scope.mensagem = {
                        texto: 'Contato \'' + nomeDel + '\' excluido',
                        classe: 'info'
                    };
                    buscaContatos();
                },
                function(erro){ //Callback se der errado
                    $scope.mensagem = {
                        texto: 'Não foi possivel excluir o contato',
                        classe: 'danger' 
                    }
                    console.log(erro);
                }
            );
        }

        $scope.filtro = '';
    }
);
angular.module('contatooh').controller('ContatosController',
    function($scope, $http){
        
        $http.get('/contatos').then(
            function(res) {
                $scope.contatos = res.data;
                console.log(res);
            },
            function(erro) {
                console.log('Não foi possível carregar a lista de contatos.');
                console.log(erro);
            }
        )
        /*
        $scope.total = 0;

        $scope.incrementa = function(){
            $scope.total++;
        }

        $scope.contatos = [
            {
                '_id': 1,
                'nome': 'Contato Angular 1',
                'email': 'cont1@empresa.com.br'
            },
            {
                '_id': 2,
                'nome': 'Contato Angular 2',
                'email': 'cont2@empresa.com.br'
            },
            {
                '_id': 3,
                'nome': 'Contato Angular 3',
                'email': 'cont3@empresa.com.br'
            }
        ];
        */
        $scope.filtro = '';
    }
);
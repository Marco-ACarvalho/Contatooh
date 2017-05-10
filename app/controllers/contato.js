var contatos = [
	{
		_id: 1,
		nome: 'Contato Exemplo 1',
		email: 'cont1@empresa.com.br'
	},
	{
		_id: 2,
		nome: 'Contato Exemplo 2',
		email: 'cont2@empresa.com.br'
	},
	{
		_id: 3,
		nome: 'Contato Exemplo 3',
		email: 'cont3@empresa.com.br'
	}
];

module.exports = function() {
	var controller = {};

	controller.listaContatos = function(req, res) {
		res.json(contatos);
	};

	controller.obtemContato = function(req, res) {
		//console.log(req.params.id);

		/* A variável filtrados sempre será um vetor, mesmo
		se o filtro encontrar apenas um único resultado*/
		var filtrados = contatos.filter(function(contato){
			return contato._id == req.params.id;
		});

		if(filtrados.length > 0) { //encontrou alguém
			//retorna o primeiro (e único) elemento do vetor
			res.json(filtrados[0])
		}
		else {
			res.status(404).send('Contato ' + req.params.id + 'não encontrado.');
		}
	}

	return controller;
};
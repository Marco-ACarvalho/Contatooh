module.exports = function(app) {
	
	var Contato = app.models.contato;
	
	var controller = {};

	controller.listaContatos = function(req, res) {
		Contato.find().populate('emergencia').exec().then(
			function(contatos){
				res.json(contatos);
			},
			function(erro){
				console.log(erro);
				// HTTP 500: Erro interno do servidor
				res.status(500).json(erro);
			}
		);
	};

	controller.obtemContato = function(req, res) {
		Contato.findById(req.params.id).exec().then(
			function(contato){
				if(! contato){ // Não encontrou o ID
					throw new Error('Contato não encontrado');
				}
				res.json(contato);
			},
			function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	controller.removeContato = function(req, res){
		Contato.remove({_id: req.params.id}).exec().then(
			function(){
				// HTTP 204: Ok, sem conteudo posterior
				res.status(204).end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};

	controller.salvaContato = function(req, res) {
		
		if(req.body._id){ //tem id, então é uma atualização
			Contato.findByIdAndUpdate(req.body._id, req.body)
				.exec().then(
					function(contato){
						res.json(contato);
					},
					function(erro){
						console.error(erro);
						//HTTP 500: erro interno do servidor
						res.status(500).json(erro);
					}
				);

		}
		else{ //não tem id, então é uma inserção

			Contato.create(req.body).then(
				function(contato){
					//HTTP 201: criado
					res.status(201).json(contato);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);

		}
	};

	return controller;
};
var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            //cada e-mail poderá ser usado por apenas um contato
            index: {
                unique: true
            }
        },
        emergencia: {
          type: mongoose.Schema.ObjectId,
          ref: 'Contato'
      }
    });

    return mongoose.model('Contato', schema);

}
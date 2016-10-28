var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var carrerasSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    required: true
  },
    nombre: {
    type: String,
    required: true
  },
    clave_area: {
    type: String,
    required: true
  },
    estudiar: {
    type: String,
    required: true
  },
    saber: {
    type: String,
    required: true
  },
    ejercer: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('carreras', carrerasSchema);
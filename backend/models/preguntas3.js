var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var preguntas3Schema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
    Reactivo: {
    type: String,
    required: true
  },
    area: {
    type: String,
    required: true
  },
    respuestas:[
      {respuesta: {type : String}, val_respuesta: {type:Boolean}, valor: {type:Number} }
  ],
    ans: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('preguntas3', preguntas3Schema);
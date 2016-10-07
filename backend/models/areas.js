var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var areaSchema = new Schema({
  idconocimientoarea: {
    type: Number,
    unique: true,
    required: true
  },
    nombre: {
    type: String,
    required: true
  },
    clave: {
    type: Number,
    required: true
  },
    activo: {
    type: Number,
    required: true
  },
    carreras:{
      nombre: {type : String}
    }
});

module.exports = mongoose.model('area', areaSchema);
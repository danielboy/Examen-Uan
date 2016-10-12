var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  curp: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    unique: true,
    required: true
  },
  matricula: {
    type: String,
    unique: true,
    required: true
  },
  escuela: {
    type: String,
    unique: true,
    required: true
  },
  turno: {
    type: String,
    unique: true,
    required: true
  },
  grupo: {
    type: String,
    unique: true,
    required: true
  },
  CS: {
    type: Number,
    unique: false,
    required: false
  },
  CSH: {
    type: Number,
    unique: false,
    required: false
  },
  CBAP: {
    type: Number,
    unique: false,
    required: false
  },
  CEA: {
    type: Number,
    unique: false,
    required: false
  },
  CBI: {
    type: Number,
    unique: false,
    required: false
  },
});



UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.curp, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    console.log(isMatch)
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
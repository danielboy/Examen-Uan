var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
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

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    console.log(isMatch)
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
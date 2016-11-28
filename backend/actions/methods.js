var User = require('../models/user');
var preguntas = require('../models/preguntas');
var areas = require('../models/areas');
var carreras = require('../models/carreras');
var jwt  = require('jwt-simple');
var config = require('../config/database');

var functions = {

// Login   0_0

  authenticate: function(req, res) {
    User.findOne({
      matricula: req.body.matricula
    }, function(err, user){
      console.log(user);
      if (err) throw err;
      if(!user){
        return res.status(403).send({success: false, msg: 'Authenticaton failed, user not found.'});
      } else {
        user.comparePassword(req.body.curp, function(err, isMatch){
          if(isMatch && !err) {
            var datos = {
  _id: user._id,
  name: user.name,
  apellidos: user.apellidos,
  matricula: user.matricula,
  curp: user.curp,
            }
            var token = jwt.encode(datos, config.secret);
            res.json({success: true, token: token});
          } else {
            return res.status(403).send({success: false, msg: 'Authenticaton failed, wrong password.'});
          }
        })
      }
    })
  },

// Nuevo Registro   0_0

  addNew: function(req, res){
    if((!req.body.name) || (!req.body.password)  ){
      console.log(req.body.name);
      console.log(req.body.password);

      res.json({success: false, msg: 'Enter all values'});
    }
    else {
      console.log(req.body)
      var newUser = User({
        name: req.body.name,
        password: req.body.password,
        apellidos: req.body.apellidos,
        matricula: req.body.matricula,
        escuela: req.body.escuela,
        turno: req.body.turno,
        grupo: req.body.grupo,
        CS: req.body.CS,
        CSH: req.body.CSH,
        CBAP: req.body.CBAP,
        CBI: req.body.CBI,
        CEA: req.body.CEA
      });

      newUser.save(function(err, newUser){
        if (err){
          console.log(err);
          res.json({success:false, msg:'Failed to save'})
        }

        else {
          res.json({success:true, msg:'Successfully saved'});
        }
      })
    }
  },

// Obtención de información

  getinfo: function(req, res){

       if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1];
            var decodedtoken = jwt.decode(token, config.secret);
      console.log(decodedtoken);
      
              User.findOne({_id: decodedtoken._id }, function(err, user){
                            console.log(user);
                            if (err) throw err;

                            if(!user){
                              return res.status(403).send({success: false, msg: 'Authenticaton failed, user not found.'});
                            } 
                            else {
                              return res.json({success: true, user});
                            }
                          })

                          }
                          else {
                            return res.json({success:false, msg: 'No sirve', extra: req.headers});
                          }
                        },

//  Actulizacion de informacion 

  putinfo: function(req, res){

      if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        var token = req.headers.authorization.split(' ')[1];
        var decodedtoken = jwt.decode(token, config.secret);
        var data =  {
              CS: req.body.CS,
              CSH: req.body.CSH,
              CEA:  req.body.CEA,
              CBAP: req.body.CBAP,
              CBI:  req.body.CBI
              };
              User.update({_id:decodedtoken._id}, data, {}, function(err, data){
                if (err){
                  console.log(err);
                  res.json({success:false, msg:'Failed to save'})
                }

                else {
                  res.json({success:true, msg:'Successfully saved'});
                }
              })
            }
          },


      // Consulta Preguntas
      preguntas: function(req, res){
      preguntas.find({}, function(err, preguntas) {
                if (err){
                  console.log(err);
                  res.json({success:false, msg:'Hola no sirve'})
                }

                else {
                  res.json({success:true, msg:'HOla', preguntas});
                }
        console.log(preguntas);
      });
      },

     // Consulta areas
      areas: function(req, res){
      areas.find({}, function(err, areas) {
                if (err){
                  console.log(err);
                  res.json({success:false, msg:'Hola no sirve'})
                }

                else {
                  res.json({success:true, msg:'HOla', areas});
                }
        console.log(areas);
      });
      },

           // Consulta carreras
      carreras: function(req, res){
      carreras.find({}, function(err, carreras) {
                if (err){
                  console.log(err);
                  res.json({success:false, msg:'Hola no sirve'})
                }

                else {
                  res.json({success:true, msg:'HOla', carreras});
                }
        console.log(carreras);
      });
      }

              };


module.exports = functions;

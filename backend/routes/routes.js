var express = require('express'),
    actions = require('../actions/methods');

var router = express.Router();

router.post('/authenticate', actions.authenticate);
router.post('/adduser', actions.addNew);
router.get('/getinfo', actions.getinfo);
router.put('/putinfo', actions.putinfo);
router.get('/preguntas', actions.preguntas);
router.get('/areas', actions.areas);
router.get('/carreras', actions.carreras);
//router.get('/gettest', actions.gettest);

module.exports=router;
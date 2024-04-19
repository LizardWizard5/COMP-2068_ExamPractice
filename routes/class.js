var express = require('express');
var router = express.Router();
var Class = require('../models/class');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let classes = Class.find();
    res.render('class', { title: 'Class', classes: classes });
});
  
  module.exports = router;
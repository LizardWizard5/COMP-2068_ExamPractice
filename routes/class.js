var express = require('express');
var router = express.Router();
var Class = require('../models/class');

/* GET users listing. */
router.get('/', async (req, res, next)=> {
    let classes = await Class.find();
    console.log(classes)
    res.render('class', { title: 'Class', classes: classes });
});
  
  module.exports = router;
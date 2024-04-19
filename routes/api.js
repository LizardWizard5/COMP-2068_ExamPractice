var express = require('express');
var router = express.Router();
var Exam = require('../models/exam')
var Class = require('../models/class')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
router.get('/exams',async (req,res,next)=>{
  let exams = await Exam.find()
  res.send(exams)
})

router.get('/classes',async (req,res,next)=>{
  let classes = await Class.find()
  res.send(classes)
})
  
module.exports = router;
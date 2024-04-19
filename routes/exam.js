var express = require('express');
var router = express.Router();
var Exam = require('../models/exam');
var Class = require('../models/class');
const exam = require('../models/exam');

/* GET users listing. */
router.get('/', async (req, res, next) =>{
    let exams = await Exam.find();
    console.log(exams);
    res.render('exam', {exams: exams});
  });

router.get('/create', async (req, res, next) => {
    let classes = await Class.find();
    res.render('exam/create.hbs', {classes: classes});

});
// POST: Post a new exam
router.post('/create', async (req, res, next) =>{
    try{
        let className = req.body.class.toString().split('-')[1];
        let classId = req.body.class.toString().split('-')[0];
        let exam= {
            date: req.body.date,
            endtime: req.body.endtime,
            type: req.body.type,
            room: req.body.room,
            description: req.body.description,
            class:{
                name: className,
                id: classId
            }
           
        }
        console.log("POSTED EXAM")
        console.log(exam);
        await Exam.create(exam);

    }catch(err){
        console.log(err);
    }

    res.redirect('/exam');
    
});

router.get('/edit/:id', async (req, res, next) =>{
    let exam = await Exam.findById(req.params.id);
    let classes = await Class.find();
    res.render('exam/edit.hbs', {exam: exam, classes: classes});
});
  
  module.exports = router;
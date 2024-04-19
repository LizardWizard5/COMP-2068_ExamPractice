var express = require('express');
var router = express.Router();
var Class = require('../models/class');

/* GET class listing. */
router.get('/', async (req, res, next)=> {
    let classes = await Class.find();
    console.log(classes)
    res.render('class/index', { title: 'Class', classes: classes });
});

/* GET class create form */
router.get('/create', (req,res,next)=>{
  res.render('class/create')
})
  
router.post('/create', async(req,res,next)=>{
    await Class.create(req.body)
    res.redirect('/')
})

router.get('/edit/:id', async (req,res,next)=>{
  let findClass = await Class.findById(req.params.id)
  res.render('class/edit',{title:'Edit class',class:findClass})
})

router.post('/edit/:id', async (req,res,next)=>{
  await Class.findByIdAndUpdate(req.params.id,req.body)
  res.redirect('/')
})

router.get('/delete/:id',async(req,res,next)=>{
  await Class.findByIdAndDelete(req.params.id)
  res.redirect('class')
})
  
  module.exports = router;
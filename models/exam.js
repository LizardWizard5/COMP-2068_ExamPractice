/* User Model by Eric Wooldridge */
var mongoose = require('mongoose');

var ExamSchema = new mongoose.Schema({
    type: String,
    class:{
        id:String,
        name:String
    },
    room:String,
    date: String,
    description: String,
    endtime:String,

    },
    {
        collection: 'Exams'
    });

module.exports = mongoose.model('Exam', ExamSchema);
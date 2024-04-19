/* Class Model by Erio Wooldridge */
var mongoose = require('mongoose');


var ClassSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    room: String,
    time: String,
    day:String
    //students: [{
    //    id: String,
    //    name: String
    //}]
},
{
    collection: 'Classes'
});

module.exports = mongoose.model('Class', ClassSchema);
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hbs = require('hbs');
var app = express();

//Mongoose
var mongoose = require('mongoose');
//mongodb+srv://eric:<password>@examcluster.gpxztj8.mongodb.net/
mongoose.connect("mongodb+srv://eric:EricRocks12@examcluster.gpxztj8.mongodb.net/MyProject",{}).then((res) => { console.log('Connected to MongoDB') })
.catch((err) => { console.log(`Connection failure: ${err}`) });

hbs.registerHelper('eq', function(a, b, options) {
  return a === b

});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', require('./routes/api'));
app.use('/exams', require('./routes/exam'));
app.use('/class',require('./routes/class'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));



//PASSPORT


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

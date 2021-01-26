var createError = require('http-errors');
const methodOverride = require('method-override')
const fs = require('fs')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var heroesRouter = require('./routes/products')
var authRouter = require('./routes/auth')

var checkIP = require("./middlewares/check-ip");
const checkIp = require('./middlewares/check-ip');
const logMiddleware = require('./middlewares/log.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'MAG',resave: false, saveUninitialized:true}))
// app.use(function (req,res,next){
//   if(req.session !=undefined){
//     res.locals.user = req.session.loggedUser
//     next()
//   }
// })
app.use(function(req, res, next) {
  console.log(req.session.user)
  if (req.session.user != undefined) {
    res.locals.user = req.session.user
  }
  return next()
})
app.use(logMiddleware)

app.use('/', indexRouter);
app.use('/products', heroesRouter)
app.use('/users', usersRouter);
app.use('/auth', authRouter );  

// incorpore checkIP del Middleware para todo el sitio
app.use(checkIp) 

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

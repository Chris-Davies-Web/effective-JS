const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  hbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const oneRouter = require('./routes/one');
const twoRouter = require('./routes/two');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'layout',
  partialsDir: path.join(__dirname, 'views/partials')
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/one', oneRouter);
app.use('/two', twoRouter);
app.use('/users', usersRouter);

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

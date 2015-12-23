module.exports = function(dataSource) {
  var express     = require('express');
  var bodyParser  = require('body-parser');
  var favicon     = require('serve-favicon');
  var app         = express();

  var routes      = require('./routes.js')(dataSource);

  function logTime(req, res, next) {
    // console.log('Time:', Date.now());
    next();
  }

  function clientError(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }

  function serverError(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err.stack);
    res.json({
      message: err.message,
      error: (process.env.NODE_ENV === 'production') ? {} : err
    });
  }

  app.use(bodyParser.json());
  app.use(favicon(__dirname + '/favicon.ico'));

  app.all('/*', function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");

   next();
  });


  app.post('/stock', routes.stockUp);

  app.get('/', routes.index);
  app.get('/books/:isbn', routes.getCount);
  app.get('/books/', routes.findAll);
  app.get('/log', logTime, routes.log);
  app.get('/nolog', routes.nolog);

  app.use(clientError);
  app.use(serverError);

  return app;
};

var MongoClient = require('mongodb').MongoClient;
var connection  = MongoClient.connect('mongodb://localhost:27017/bookinventory');
var dataSource  = require('./db.js')(connection);
var mock        = require('./mock')();

var app = require('./app.js')(dataSource);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('%s, Example app listening at http://%s:%s', new Date(), host, port);
});

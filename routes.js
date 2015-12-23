module.exports = function(dataSource) {
  return {
    index: function(req, res) {
      res.json({
        'status': 'ok'
      });
    },
    findAll: function(req, res) {
      dataSource.findAll().then(function(data) {
        res.json(data);
      });
    },
    stockUp: function (req, res) {
      var isbn = req.body.isbn;
      var count = req.body.count;

      dataSource.stockUp(isbn, count);

      res.status(200);
      res.json({
        'status': 'ok',
        'uploaded-data': {
          'isbn': isbn,
          'count': count
        }
      });
    },
    getCount: function(req, res) {
      var type = req.query.type;

      dataSource.getCount(req.params.isbn).then(function(data) {
        if(type === 'html') {
          res.send('count: ' + data);
        } else {
          res.status(200).json({
            'status': 'ok',
            'count': data
          });
        }
      });
    },
    log: function (req, res) {
      res.json({
        message: 'Hello World!'
      });
    },
    nolog: function (req, res) {
      res.json({
        message: 'No Log Hello World!'
      });
    }
  };
};

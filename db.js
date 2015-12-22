module.exports = function(connection) {
  return {
    findAll: function() {
      return connection.then(function(db) {
        return db.collection('wojtaszek-books').find({}).toArray();
      }).catch(function(err) {
        console.log('catch err: ', err);
        return res.send('catch err');
      });
    },
    stockUp: function(isbn, count) {
      connection.then(function(db) {
        return db.collection('wojtaszek-books').updateOne({isbn: isbn}, {
          isbn: isbn,
          count: count
        }, {upsert: true});
      });
    },
    getCount: function(isbn) {
      return connection.then(function(db) {
        isbn = parseInt(isbn, 10);
        return db.collection('wojtaszek-books').find({isbn: isbn}).limit(1).next();
      }).then(function(result) {
        if(result) {
          return result.count;
        } else {
          return 0;
        }
      }).catch(function(err) {
        console.log('catch err: ', err);
        return err;
      });
    }
  };
};

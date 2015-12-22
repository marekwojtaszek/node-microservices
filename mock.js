var _ = require('lodash');

module.exports = function () {

    var books = [];

    return {
        findAll: function () {
            return Promise.resolve(books);
        },
        stockUp: function (isbn, count) {
            var item = this._findItem(isbn);
            if (item) {
                item.count = count;
            } else {
                books.push({isbn: isbn, count: count});
            }
            return Promise.resolve();
        },
        _findItem: function (isbn) {
            return _.find(books, function (book) {
                return book.isbn == isbn;
            });
        },
        getCount: function (isbn) {
            var item = this._findItem(isbn);
            if (item) {
                return Promise.resolve(item.count);
            } else {
                return Promise.resolve(null);
            }
        }
    };
};

/*
module.exports = function() {
  return {
    addBook: function(isbn, count) {
    },
    getAll: function() {
      return Promise.resolve([
        {
          "_id": "5677f90fc2d7d137e4d6eef0",
          "isbn": 123,
          "count": 1
        },
        {
          "_id": "567805a8c2d7d137e4d6eef1",
          "isbn": 789,
          "count": 2
        },
        {
          "_id": "56780a57c2d7d137e4d6eef2",
          "isbn": 567,
          "count": 3
        },
        {
          "_id": "56780fafc2d7d137e4d6eef3",
          "isbn": 1234,
          "count": 10
        }
      ]);
    },
    getBook: function(isbn) {
      return Promise.resolve({
        "_id": "5677f90fc2d7d137e4d6eef0",
        "isbn": isbn,
        "count": 1
      });
    }
  };
};
*/

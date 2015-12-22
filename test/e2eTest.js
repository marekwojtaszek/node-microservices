var request = require('supertest');
var mock = require('../mock.js')();
var app = require('../app.js')(mock);

describe('GET /log', function(){
  it('respond with json', function(done){
    request(app)
      .get('/log')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /stock', function(){
  it('post book data', function(done){
    var book = {
      'isbn': 123,
      'count': 1
    };

    request(app)
      .post('/stock')
      .set('Accept', 'application/json')
      .send(book)
      .expect('Content-Type', /json/)
      .expect(200, {
        "status": "ok",
        "uploaded-data": {
          "isbn": 123,
          "count": 1
        }
      }, done);
  });
});

describe('GET /books/123', function(){
  it('respond with json', function(done){
    request(app)
      .get('/books/123')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        status: 'ok',
        count: 1
      }, done);
  });
});

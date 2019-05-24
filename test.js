var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('./server/index.js');
var Home = require('./db/index.js');
var {getRelatedHomes} = require('./db/HomeController.js')

chai.use(require('chai-things'))
describe('Related Carousel', function() {
  describe('API', function () {

    describe('GET', function () {

      it('responds with a 200 (OK)', function (done) {

        request(app)
          .get('/related')
          .expect(200, done);

      });
      
      it('responds with all 12 related homes', function (done) {
        request(app)
          .get('/related')
          .expect(Array.isArray(res.body)).to.be(true)
          .done()
      })
    });
  });

  describe('DB', function() {
    describe('seeding', function() {
      Home.find({}, (err, result) => {
        if(err){
          console.log(err)
          expect(err).to.be(null)
        } else {
          expect(result.length).to.equal(100)
        }
      })
    })
  })
})


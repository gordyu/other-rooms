var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('./server/index.js');
var Home = require('./db/index.js');
var renderer = require('react-test-renderer')
var React = require('react')
var {shallow} = require('enzyme')
var App = require('./client/index.jsx')
var {getRelatedHomes} = require('./db/HomeController.js');

chai.use(require('chai-things'))
describe('Related Carousel', function() {
  describe('API', function () {

    describe('GET', function () {

      it('responds with a 200 (OK)', function (done) {

        request(app)
          .get('/related')
          .expect(200)
          .end(function(err, res) {
            if(err) {
              throw err
            }
            done()
          })

      });
      
      it('responds with all 12 related homes', function (done) {

        request(app)
          .get('/related')
          .end(function(err, res) {
            if(err) {
              throw err
            } else {
              expect(res.body.length).to.equal(12)
              done()
            }
          })
      })

      it('responds with objects in the correct format', function(done) {

        request(app)
          .get('/related')
          .end(function(err, res) {
            expect(res.body[0]).to.be.a('object')
            expect(Object.keys(res.body[0]).length).to.equal(10)
            done()
          })
      })
    });
  });

  describe('DB', function() {
    describe('seeding', function() {
      it('should seed the database with 100 entries', function(done) {
        Home.find({}, (err, result) => {
          if(err){
            console.log(err)
            expect(err).to.be(null)
          } else {
            expect(result.length).to.equal(100)
            done()
          }
        })
      })
    })
  })
  
  describe('front-end carousel', function() {
    test('holds home entries in state', () =>{

      const carousel = shallow(<App />)

      expect(carousel.state(related)).to.be.a('array')
      expect(carousel.state(related).length).to.equal(12)
    })
  })
})


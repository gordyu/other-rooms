const mongoose = require('mongoose')
const Home = require('./index.js')

module.exports.getRelatedHomes = (home, callback) => {
  Home.find((err, result) => {
    if(err) {
      console.log(err)
      callback(err)
    } else {
      callback(null, result)
    }
  }).limit(12)
}
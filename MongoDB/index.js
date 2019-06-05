// model and schema exports
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');



const homeSchema = mongoose.Schema({
  id: Number,
  type: String,
  tags: String,
  price: Number,
  location: String,
  rating: Number,
  numRatings: Number,
  description: String,
  image: String
});


const Home = mongoose.model('Home', homeSchema);

module.exports = Home;

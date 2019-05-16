//create dummy data using mongoose model Home
let Home = require('../../db/index.js')
//{
//  type: String,
//  tags: String,
//  price: Number,
//  location: String,
//  images: String
//}

let types = []
let tags = []
let prices = []
let locations = []
let images = []
let ratings = [1, 2, 3, 4, 5]
let numRatings = []

//chooses a random element from each of the above collections and declares them as values in an object which it returns
var generate = () => {
  let entry = {}
  entry.type = types[Math.floor(Math.random() * types.length)]

  entry.tag = tags[Math.floor(Math.random() * tags.length)]

  entry.price = prices[Math.floor(Math.random() * prices.length)]

  entry.location = locations[Math.floor(Math.random() * locations.length)]

  entry.image = images[Math.floor(Math.random() * images.length)]

  entry.rating = ratings[Math.floor(Math.random() * ratings.length)]

  entry.numRatings = numRatings[Math.floor(Math.random() * numRatings.length)]

  return entry
}

// destroy all previous records in the target DB

//generate 100 random records from the chunks of dummy data collected above
let seedData = []

for(let i = 0; i < 100; i++) {
  seedData.push(generate())
}

Home.insertMany(seedData, CALLBACK)






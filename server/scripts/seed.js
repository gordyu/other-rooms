//create dummy data using mongoose model Home
let Home = require('../../db/index.js')
//{
//  type: String,
//  tags: String,
//  price: Number,
//  location: String,
//  images: String
//}

// random pieces of data
let types = ['ENTIRE GUEST SUITE', 'PRIVATE ROOM', 'ENTIRE GUESTHOUSE', 'ENTIRE APARTMENT', 'ENTIRE CABIN', 'ENTIRE HOUSE', 'TREEHOUSE', 'ENTIRE LOFT', 'ENTIRE BUNGALOW', 'ENTIRE COTTAGE', 'CASA PARTICULAR', 'ENTIRE CONDOMINIUM', 'ENITRE TOWNHOUSE']
let descriptions = ['Craftsman Cottage by the Sea', '* New (13% City Tax Incl.) - SAVE $60/nt', 'WELCOME to the Cottage on Caudill', 'Unique cabana room on garden deck.', 'Cambria Summer Place Homestay', 'Unique room with private entrance.', 'Shelly the Airstream', '*Seaside-Village Cottage*', 'Ocean Front Get Away- Luxury Suite on the Beach', 'Bungalow by the Bay', 'Cozy Cottage on Sunny Hillside', 'B&B 1-4 1-2 Rms 3 Beds Pvt Ent& Bath Hearst Castle', 'ROOM 1 In Oprah\'s Happiest City', 'Peaceful, private garden studio.', 'Peaceful, private garden studio.', 'Clean Private Hotel Alternative', 'Mini-Ranch near AG village!', 'The Big Kahuna studio', 'Studio with private patio and view', 'MidCenturyDesign,walk to town,3rms', 'Cozy Cottage on Sunny Hillside', 'The Garden On The Way', 'Shelly the Airstream', '"The Treehouse"/studio in the oaks', 'WELCOME to the Cottage on Caudill']
let tags = ['Private', 'Self check-in', 'Sparkling clean', 'Superhost', 'Great check-in experience', 'Entire', 'Great location', 'Great Value', 'Great check-in experience' ]
let prices
let locations = ['Arroyo Grande', 'Santa Barbara', 'Ojai', 'Bascons', 'Longjumeau', 'Gannawarra', 'Sykopetra', 'Pasadena', 'Laguna Beach', 'Anaheim', 'Huntington Beach', 'Marina del Rey', 'Venice', 'Malibu', 'San Luis Obispo', 'Hermosa Beach', 'Malibu', 'Manhattan Beach', 'Newport Beach', 'Long Beach']
let images = ['https://unsplash.com/photos/jn7uVeCdf6U', 'https://unsplash.com/photos/kdwahpWYfQo', 'https://unsplash.com/photos/AQl-J19ocWE', 'https://unsplash.com/photos/AhiUnolb7cg', 'https://unsplash.com/photos/OgcJIKRnRC8', 'https://unsplash.com/photos/ob-hsLNxYPc', 'https://unsplash.com/photos/eWqOgJ-lfiI', 'https://unsplash.com/photos/NkcfYDIG66Y', 'https://unsplash.com/photos/ogsUbaQiEkw']
let ratings = [1, 2, 3, 4, 5]
let numRatings

//chooses a random element from each of the above collections and declares them as values in an object which it returns
var generate = () => {
  let entry = {}
  entry.type = types[Math.floor(Math.random() * types.length)]

  entry.description = descriptions[Math.floor(Math.random() * descriptions.length)]

  entry.tags = tags[Math.floor(Math.random() * tags.length)]

  entry.price = Math.floor(Math.random() * (1000+ 50) + 50)

  entry.location = locations[Math.floor(Math.random() * locations.length)]

  entry.image = images[Math.floor(Math.random() * images.length)]

  entry.rating = ratings[Math.floor(Math.random() * ratings.length)]

  entry.numRatings = Math.floor(Math.random() * (1000+ 50) + 50)

  return entry
}

// destroy all previous records in the target DB

//generate 100 random records from the chunks of dummy data collected above
let seedData = []

for(let i = 0; i < 100; i++) {
  seedData.push(generate())
}

//delete old data and insert genereated data into database

Home.deleteMany({}, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('database cleared')
    Home.insertMany(seedData, (err) => {
      if(err){
        console.log(err)
      } else {
        console.log('database seeded')
        Home.find({}, (err, result) => {
          if(err){
            console.log(err)
          } else {
            console.log(result)
          }
        })
      }
    })
  }
})








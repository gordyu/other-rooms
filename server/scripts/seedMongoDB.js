const Home = require('../../MongoDB/index.js');
const faker = require('faker');

//{
//  type: String,
//  tags: String,
//  price: Number,
//  location: String,
//  images: String
//}

// random pieces of data
// let types = ['ENTIRE GUEST SUITE', 'PRIVATE ROOM', 'ENTIRE GUESTHOUSE', 'ENTIRE APARTMENT', 'ENTIRE CABIN', 'ENTIRE HOUSE', 'TREEHOUSE', 'ENTIRE LOFT', 'ENTIRE BUNGALOW', 'ENTIRE COTTAGE', 'CASA PARTICULAR', 'ENTIRE CONDOMINIUM', 'ENITRE TOWNHOUSE']
// let descriptions = ['Craftsman Cottage by the Sea', '* New (13% City Tax Incl.) - SAVE $60/nt', 'WELCOME to the Cottage on Caudill', 'Unique cabana room on garden deck.', 'Cambria Summer Place Homestay', 'Unique room with private entrance.', 'Shelly the Airstream', '*Seaside-Village Cottage*', 'Ocean Front Get Away- Luxury Suite on the Beach', 'Bungalow by the Bay', 'Cozy Cottage on Sunny Hillside', 'B&B 1-4 1-2 Rms 3 Beds Pvt Ent& Bath Hearst Castle', 'ROOM 1 In Oprah\'s Happiest City', 'Peaceful, private garden studio.', 'Peaceful, private garden studio.', 'Clean Private Hotel Alternative', 'Mini-Ranch near AG village!', 'The Big Kahuna studio', 'Studio with private patio and view', 'MidCenturyDesign,walk to town,3rms', 'Cozy Cottage on Sunny Hillside', 'The Garden On The Way', 'Shelly the Airstream', '"The Treehouse"/studio in the oaks', 'WELCOME to the Cottage on Caudill']
// let tags = ['Private', 'Self check-in', 'Sparkling clean', 'Superhost', 'Great check-in experience', 'Entire', 'Great location', 'Great Value', 'Great check-in experience' ]
// let prices
// let locations = ['Arroyo Grande', 'Santa Barbara', 'Ojai', 'Bascons', 'Longjumeau', 'Gannawarra', 'Sykopetra', 'Pasadena', 'Laguna Beach', 'Anaheim', 'Huntington Beach', 'Marina del Rey', 'Venice', 'Malibu', 'San Luis Obispo', 'Hermosa Beach', 'Malibu', 'Manhattan Beach', 'Newport Beach', 'Long Beach']
// let images = ['https://s3.us-east-2.amazonaws.com/5uper5quad1/cindy-tang-25654-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/craig-mclachlan-402808-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/flo-pappert-201009-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/ialicante-mediterranean-homes-475777-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/ian-keefe-449093-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/joshua-case-639994-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/luke-stackpoole-561551-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/pixasquare-622732-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/scott-webb-167099-unsplash.jpg', 'https://s3.us-east-2.amazonaws.com/5uper5quad1/jesse-roberts-146556-unsplash.jpg']
let ratings = [1, 2, 3, 4, 5]
let numRatings

//chooses a random element from each of the above collections and declares them as values in an object which it returns
var generate = (id) => {
  let entry = {};
  entry.type = faker.lorem.sentence(3);

  entry.description = faker.lorem.sentence(6);

  entry.tags = faker.company.bsBuzz();

  entry.price = faker.commerce.price();

  entry.location = faker.address.county();

  entry.image = `https://picsum.photos/300/210?random=${id}`;

  entry.rating = faker.random.number({min: 0, max: 5});

  entry.numRatings = faker.random.number({min: 1, max: 1000});

  return entry;
}

// destroy all previous records in the target DB

//generate 100 random records from the chunks of dummy data collected above
let seedData = [];

for(let i = 0; i < 100; i++) {
  let newHome = generate(i);
  newHome.id = i;
  seedData.push(newHome);
}
console.log(seedData);
//delete old data and insert genereated data into database

Home.deleteMany({}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('database cleared');
    Home.insertMany(seedData, (err) => {
      if(err){
        console.log(err);
      } else {
        console.log('database seeded');
        Home.find({}, (err, result) => {
          if(err){
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});








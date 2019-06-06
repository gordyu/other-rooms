const Home = require('./index.js');
const generator = require('../dataGenerator.js');

Home.deleteMany({}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('database cleared');
    Home.insertMany(generator.data, (err) => {
      if(err){
        console.log(err);
      } else {
        console.log('database seeded');
      }
    });
  }
});








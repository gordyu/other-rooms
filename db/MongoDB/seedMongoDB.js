const Home = require('./index.js');
const generator = require('../dataGenerator.js');

Home.deleteMany({}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Database Cleared.');
    console.log(`Starting Database seeding at ${Date()}`)
    Home.insertMany(generator.data, (err) => {
      if(err){
        console.log(err);
      } else {
        console.log(`Database seeding completed at ${Date()}`);
      }
    });
  }
});








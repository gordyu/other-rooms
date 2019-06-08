const faker = require('faker');
const fs = require('fs');
const path = require('path');

// const seedData = [];
const filepath = path.join(__dirname, '/data.txt');

generate = (id) => {
  let entry = {};

  entry.id = id;

  entry.type = faker.lorem.sentence(3);

  entry.description = faker.lorem.sentence(6);

  entry.tags = faker.company.bsBuzz();

  entry.price = faker.commerce.price();

  entry.location = faker.address.county();

  entry.image = `https://picsum.photos/300/210?random=${id}`;

  entry.rating = faker.random.number({min: 0, max: 5});

  entry.numRatings = faker.random.number({min: 1, max: 1000});

  return entry;
};

// for(let i = 0; i < 100000; i++) {//Breaks when using 1,000,000 Documents
//   let newHome = generate(i);
//   seedData.push(newHome);

// }
console.log(`Creating data.txt file at ${Date()}`);
fs.writeFile(filepath, '', (err) => {
  if (err){
    console.log(`Error creating data.txt file: ${err}`);
    return;
  }
  console.log(`Successfully created data.txt at ${Date()}`);
  console.log(`Opening data.txt file at ${Date()}`);
  fs.open(filepath,'r+', (err, fd) => {
    if(err){
      console.log(`Error opening document`);
      return;
    }
    let limit = 10000000;
    console.log(`Successfully opened data.txt file at ${Date()}`);
    console.log(`Creating ${limit} rows for data.txt file at ${Date()}`);
    let writeHome = function(count) {
      if(count >= limit){
        console.log(`Successfully generated ${count} rows at ${Date()}`);
        return;
      }
      let {id, type, tags, price, description, location, rating, numRatings, image} = generate(count);
      fs.write(fd, `${id}\t${type}\t ${tags}\t ${price}\t ${description}\t ${location}\t ${rating}\t ${numRatings}\t${image}\n`, (err) => {
        if(err){
          console.log(`Error writting row ${count}: ${err}`);
          return;
        }
        writeHome(count + 1);
      });
    }
    writeHome(0);
  });
});
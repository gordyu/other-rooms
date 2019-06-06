const faker = require('faker');

const seedData = [];

generate = (id) => {
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
};

for(let i = 0; i < 100000; i++) {//Breaks when using 1,000,000 Documents
  let newHome = generate(i);
  newHome.id = i;
  seedData.push(newHome);
}

console.log(`${seedData.length} Documents generated.`);

module.exports.data = seedData;
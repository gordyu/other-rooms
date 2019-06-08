//Seeding script
const pgClient = require('./index.js')
const path = require('path');

const filepath = path.join(__dirname, '../data.txt');
console.log('Filepath', filepath);
console.log(`Deleting "homes" table at ${Date()}`);
pgClient.query('DELETE FROM homes;')
.then(() => {
  console.log(`Successfully deleted "homes" table at ${Date()}`);
  console.log(`Seeding data.txt file into "homes" table at ${Date()}`);
  pgClient.query(`COPY homes FROM '${filepath}';`)
  .then(() => {
    console.log(`Successfully seeded data.txt into "homes" table at ${Date()}`);
  })
  .catch((err) => {
    console.log(`Error seeding data: ${err}`);
  });
})
.catch((err) => {
  console.log(`Error deleting "homes table: ${err}"`);
});
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'postgres',
  database: 'sdc',
});

client.connect()
.then(() => {
  console.log(`Database has been connected`);
})
.catch((err) => {
  console.log(`Error connecting to database: ${err}`);
});

client.query('CREATE TABLE IF NOT EXISTS homes (id SERIAL PRIMARY KEY, type VARCHAR(100), tags VARCHAR(100), price NUMERIC, description VARCHAR(255), location VARCHAR(100), rating NUMERIC, numRatings NUMERIC, image VARCHAR(255))', (err, response) => {
});


module.exports = client;





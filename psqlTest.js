const { Client } = require('pg');

//connect to PostgreSQL and test queries to first, middle, and last ids
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  database: 'sdc',
});

client.connect();
const first_id = 1
const middle_id = 500000
const last_id = 10000000
console.log(`---------- PostgreSQL testing ----------`);

var start_last = Date.now();
console.log(`Querying last id in the file: ${last_id} at ${Date()}`)
client.query(`SELECT * FROM homes WHERE id=${last_id};`)
.then((results) => {
  var time_last = Date.now() - start_last;
  console.log(`Completed LAST id query after ${time_last} miliseconds. Result: ${results.rows[0]}\n`);
  var start_middle = Date.now();
  console.log(`Querying middle id in the file: ${middle_id} at ${Date()}`);
  client.query(`SELECT * FROM homes WHERE id=${middle_id};`)
  .then((results) => {
    var time_middle = Date.now() - start_middle;
    console.log(`Completed MIDDLE id query after ${time_middle} milliseconds. Result: ${results.rows[0]}\n`);
    var start_first = Date.now();
    console.log(`Querying first id in the file: ${first_id} at ${Date()}`);
    client.query(`SELECT * FROM homes WHERE id=${first_id};`)
    .then((results) => {
      var time_first = Date.now() - start_first;
      console.log(`Completed FIRST id query after ${time_first} milliseconds. Result: ${results.rows[0]}\n`)
      })
    .catch(displayError);
    })
  .catch(displayError);
})
.catch(displayError);

function displayError(err) {
  console.log(`Query errored out: ${err}`);
}


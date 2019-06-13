const Cassandra = require('cassandra-driver');
const pg = require('pg');

console.log(`---------- Cassandra testing ----------`);
const client = new Cassandra.Client({contactPoints:['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'sdc_project'});
const cas_first = '5d396d20-8d77-11e9-b878-c17b7dd5454f';
const cas_middle = 'e5869d73-8d77-11e9-b878-c17b7dd5454f';
const cas_last = '6ceacd3c-8d78-11e9-b878-c17b7dd5454f';

var start_first = Date.now();
console.log(`Querying first id in the file: ${cas_first} at ${Date()}`);
client.execute(`SELECT * FROM homes WHERE id=${cas_first};`)
.then((result) => { //FIRST ID
  var time_first = Date.now() - start_first;
  console.log(`Completed FIRST id query after ${time_first} miliseconds. Result: ${result.rows[0]} \n`);
  var start_middle = Date.now();
  console.log(`Querying middle id in the file: ${cas_middle} at ${Date()}`);
  client.execute(`SELECT * FROM homes WHERE id=${cas_middle};`)
  .then((result) => { //SECOND ID
    var time_middle = Date.now() - start_middle;
    console.log(`Completed MIDDLE id query after ${time_middle} miliseconds. Result: ${result.rows[0]}\n`);
    var start_last = Date.now();
    console.log(`Querying last id in the file: ${cas_last} at ${Date()}`);
    client.execute(`SELECT * FROM homes WHERE id=${cas_last};`)
    .then((result) => { //LAST ID
      var time_last = Date.now() - start_last;
      console.log(`Completed LAST id query after ${time_last} miliseconds. Result: ${result.rows[0]}\n`);
    })
    .catch(displayError);
  })
  .catch(displayError);
})
.catch(displayError);

function displayError (err) {
  console.log(`Query errored out: ${err}`);
}



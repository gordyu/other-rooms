const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'system'});

client.connect()
.then(() => { //CONNECTED TO DATABASE
  console.log(`Successfully connected to database`);
  client.execute(`CREATE KEYSPACE IF NOT EXISTS sdc_project WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' };`)
  .then(() => {//CREATED KEYSPACE sdc_project
    console.log(`Keyspace sdc_project successfully created.`);
    client.execute(`USE sdc_project;`)
    .then(() => {//USING KEYSPACE sdc_project
      console.log(`Successfully using sdc_project database.`);
      client.execute(`CREATE TABLE IF NOT EXISTS sdc_project.homes (
        id UUID,
        type text,
        tags text,
        price decimal,
        description text,
        location text,
        rating decimal,
        numRatings decimal,
        image text,
        PRIMARY KEY (id)
      );`)
      .then(() => {//CREATED "homes" table
        console.log(`Table "homes" created.`);
      })
      .catch((err) => {
        console.log(`Error creating "homes" table: ${err}`);
      })
    })
    .catch((err) => {
      console.log(`Error using sdc_project database: ${err}`)
    })
  })
  .catch((err) => {
    console.log(`Could not create Keyspace sdc_project: ${err}`);
  });
})
.catch((err) => {
  console.log(`Could not connect to Cassandra database: ${err}`);
});


module.exports = client;


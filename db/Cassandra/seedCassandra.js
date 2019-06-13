const fs = require('fs');
const cassandra = require('cassandra-driver');
const path = require('path');
//csv-parse
const parse = require('csv-parse');
//stream-transform
const transform = require('stream-transform');
//async
const async = require('async');

var client = new cassandra.Client({contactPoints:['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'system'});

var insert = "INSERT INTO sdc_project.homes ( \
  id, \
  type, \
  tags, \
  price, \
  description, \
  location, \
  rating, \
  numRatings, \
  image) \
  VALUES (?,?,?,?,?,?,?,?,?)";

async.series([
  function(next) {
    initCassandraSchema(client, next);
  },
  function(next){
    var parser = parse({delimiter: '\t'});
    var input = fs.createReadStream(path.join(__dirname, '../data.csv'), {autoClose: true,start: 0, end: Infinity});
    var transformer = transform((line, cb) => {
      client.execute(insert, parseData(line), {prepare: true, consistency: cassandra.types.consistencies.one}, cb);
      return line;
    });

    // transformer.on('error', next);
    console.log(`Starting to seed at ${Date()}`);
    input
    .on('end', () => console.log('pipe ended'))
    .on('error', () => console.log(`error reading`))
    .pipe(parser)
    .on('end', () => console.log(`parser ended`))
    .on('error', () => console.log(`error parser`))
    .pipe(transformer)
    .on('data', (data) => {})
    .on('end', () => console.log(`Transform ended at ${Date()}`))
    .on('error', (err) => console.log(`transform error: ${err}`))
    .on('finish', () => {console.log('Ended pipe'); next();});
  }
]
, displayError);

function initCassandraSchema(client, next){
  console.log(`Initializing schema at ${Date()}`);

  async.series([
    function(nextCall) {
      console.log(`Creating KEYSPACE "sdc_project" at ${Date()}`);
      client.execute(`CREATE KEYSPACE IF NOT EXISTS sdc_project WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' };`, [], nextCall);
    },
    function(nextCall) {
      console.log(`Completed creation of KEYSPACE "sdc_project" at ${Date()}`);
      console.log(`Creating TABLE "homes" at ${Date()}`);
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
      );`, [], nextCall);
    },
    function(nextCall) {
      console.log(`Completed creation of TABLE "homes" at ${Date()}`);
      console.log(`Truncating TABLE "homes" at ${Date()}`);
      client.execute(`TRUNCATE sdc_project.homes`, [], nextCall);
    }
  ], () => {
    console.log(`Completed truncation of TABLE "homes" at ${Date()}`);
    next();
  });
};

function parseData(line) {
  return [line[0], line[1], line[2], parseFloat(line[3]), line[4], line[5], parseInt(line[6]), parseInt(line[7]), line[8]];
};

function displayError(err) {
  if(err) console.log("Error encountered : "+ err)
};



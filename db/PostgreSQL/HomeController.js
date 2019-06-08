//Methods to communicate with Database
const Home = require('./index.js');

module.exports.getLastId = (callback) => {
  Home.query('SELECT * FROM homes ORDER BY id DESC LIMIT 1;', (err, results) => {
    if(results.rows.length === 0){
      callback(err, 0);
    } else {
      callback(err, results.rows[0].id);
    }
  })
};

module.exports.getRelatedHomes = () => {
  return Home.query('SELECT * FROM homes LIMIT 12;');
};

module.exports.postRelatedHome = ({type, tags, price, description, image}) => {
  return Home.query(`INSERT INTO homes (type, tags, price, description, image) VALUES ('${type}', '${tags}', '${price}', '${description}', '${image}');`);
};

module.exports.updateRelatedHome = (id, updates) => {
  //Will probably use ES6 to map updates keys to a string of properties to update
  var str = Object.keys(updates).reduce((arr, key, index) => {
    if (Number.isInteger(updates[key])){
      arr[index] = key + '=' + `${updates[key]}`;
    } else {
      arr[index] = key + '=' + `'${updates[key]}'`;
    }
    return arr;
  }, []).join(', ');
  console.log('Updating the following:', str);
  return Home.query(`UPDATE homes SET ${str} WHERE id=${id};`);
};

module.exports.deleteRelatedHome = (id) => {
  return Home.query(`DELETE FROM homes WHERE id=${id}`);
};

module.exports.deleteAllRelatedHomes = () => {
  return Home.query('DELETE FROM homes;');
}
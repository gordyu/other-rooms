//Methods to communicate with Database
const Home = require('./index');

module.exports.getRelatedHomes = () => {
  return Home.execute('SELECT * FROM homes LIMIT 12;');
};

module.exports.postRelatedHome = ({type, tags, price, description, location, rating, numRatings, image}) => {
  return Home.execute(`INSERT INTO homes (id, type, tags, price, description, location, rating, numRatings, image) VALUES (now(), '${type}', '${tags}', ${price}, '${description}',  '${location}',  ${rating},  ${numRatings}, '${image}');`);
};

module.exports.updateRelatedHome = (id, updates) => {
  //Will probably use ES6 to map updates keys to a string of properties to update
  // var str = Object.keys(updates).reduce((arr, key, index) => {
  //   if (Number.isInteger(updates[key])){
  //     arr[index] = key + '=' + `${updates[key]}`;
  //   } else {
  //     arr[index] = key + '=' + `'${updates[key]}'`;
  //   }
  //   return arr;
  // }, []).join(', ');
  // console.log('Updating the following:', str);
  // return Home.query(`UPDATE homes SET ${str} WHERE id=${id};`);
};

module.exports.deleteRelatedHome = (id) => {
  // return Home.query(`DELETE FROM homes WHERE id=${id}`);
};

module.exports.deleteAllRelatedHomes = () => {
  // return Home.query('DELETE FROM homes;');
}
const Home = require('./index.js');


module.exports.getLastId = (callback) => {
  Home.findOne().sort({id: -1}).exec((err, document) => { callback(err, document.id) });
};

module.exports.getRelatedHomes = (home, callback) => {
  Home.find((err, result) => {
    if(err) {
      console.log(err)
      callback(err)
    } else {
      callback(null, result)
    }
  }).limit(12);
};

module.exports.postRelatedHome = (home, callback) => {
  var newHome = new Home(home);
  newHome.save(callback);
};

module.exports.updateRelatedHome = (id, updates, callback) => {
  Home.findOne({id}, (err, document) => {
    if(err){
      callback(err, null);
      return;
    }
    for (var key in updates){
      if (document._doc.hasOwnProperty(key)){
        document[key] = updates[key];
      }
    }

    document.save();
    callback(null, document);
  });
};

module.exports.deleteRelatedHome = (id, callback) => {
  Home.deleteOne({id}, callback);
};

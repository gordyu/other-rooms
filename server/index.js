const express = require('express');;
const bodyParser = require('body-parser');
// const dbController = require('../db/MongoDB/HomeController.js');
const dbController = require('../db/PostgreSQL/HomeController.js');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 3003;

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// handles requests to populate related homes in client
app.post('/related', (req, res) => {//CREATE
  let newHome = req.body.home;
  dbController.postRelatedHome(newHome)
  .then(() => {
    res.sendStatus(200);
    })
  .catch((err) => {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    });
});
app.get('/related', (req, res) => {//READ
  dbController.getRelatedHomes()
  .then((result) => {
      // sends the sorted results back to the client
      res.status(200).send(result.rows);
    })
  .catch((err) => {
      if(err) {
        console.log(err);
        res.status(403).send(err);
      }
    });
});
app.put('/related/:id', (req, res) => {//UPDATE
  if (req.params.id ){
    dbController.updateRelatedHome(req.params.id, req.body.updates, (err, document) => {
      if (err){
        console.log(err);
        return;
      }
      console.log('Successfully updated Home', document.id);
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(200);
  }
});
app.delete('/related/:id', (req, res) => {//DELETE
  console.log('Deleting Home', req.params.id);
  if(req.params.id){
    dbController.deleteRelatedHome(req.params.id, (err) => {
      if(err){
        console.log(err);
        return;
      }
      res.sendStatus(200);
      console.log('Successfully deleted Home', req.params.id);
    });
  } else {
    res.sendStatus(200);
  }
});

app.use((req, res) => {
  console.log('Invalid path');
  res.sendStatus(404);
});


module.exports = app;
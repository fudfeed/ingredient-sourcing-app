const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const dbHelpers = require('../database/dbHelpers');

const app = express();

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

app.get('/recipes', (req, res) => {
  dbHelpers.getAllRecipes()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('error server get reviews');
    });
});

app.get('/stores', (req, res) => {
  dbHelpers.getAllStores()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('error server get reviews');
    });
});

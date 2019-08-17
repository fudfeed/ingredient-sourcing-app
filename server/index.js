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



//routes below are for use in Wayne's Search component for ingredient search
app.get('/stores/:ingredient', (req, res) => {
  console.log('store search activated')
  let { ingredient } = req.params;
  db.Store.find({'ingredients.name': ingredient}).limit(5)
  .then((store) => {
    res.status(200).send(store);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
})

app.get('/recipes/:ingredient', (req, res) => {
  let { ingredient } = req.params;
  db.Recipe.find({'ingredients.name': ingredient}).limit(3)
  .then((recipes) => {
    res.status(200).send(recipes);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
})
/************************************************************************/
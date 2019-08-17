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

// app.get('/stores', (req, res) => {
//   dbHelpers.getAllStores()
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('error server get reviews');
//     });
// });



//routes below are for use in Wayne's Search component for ingredient search
app.get('/stores?', (req, res) => {
  let { ingredient } = req.query;
  //ingredient is [query1, query2, query3, ...]
  db.Store.find({ 'ingredients.name': { $all: ingredient } }).limit(2)
    .then((storeArray) => {
      let filteredArray = [];
      const filterIrrelevantResults = (store, items) => {
        for (let i of store) {
          let { id, name, latitude, longitude, score } = i;
          let ingredients = [];
          filteredArray.push({ id, name, latitude, longitude, score, ingredients })
          for (let j of i.ingredients) {
            if (items.includes(j.name)) {
              filteredArray[filteredArray.length - 1].ingredients.push(j);
            }
          }
        }
      }
      filterIrrelevantResults(storeArray, ingredient);
      res.status(200).send(filteredArray);
    })
    .catch((error) => {
      res.status(404).send(error);
    })
})


app.get('/recipes?', (req, res) => {
  let { ingredient } = req.query;
  db.Recipe.find({ 'ingredients.name': ingredient }).limit(3)
    .then((recipes) => {
      res.status(200).send(recipes);
    })
    .catch((error) => {
      res.status(404).send(error);
    })
})
/************************************************************************/
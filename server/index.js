const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const dbHelpers = require('../database/dbHelpers');
const morgan = require('morgan')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

app.get('/recipes', (req, res) => {
  dbHelpers.getAllRecipes()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('error server get recipes');
    });
});

// app.get('/stores', (req, res) => {
//   dbHelpers.getAllStores()
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('error server get stores');
//     });
// });

//route for recipe post (jeremy)
app.post('/recipes', (req, res) => {
  const { payload } = req.body
  dbHelpers.postRecipe(payload)
    .then((data) => {
      res.status(201).send('posted');
    })
    .catch((err) => {
      res.status(404).send('error server post recipe');
    });
})


//routes below are for use in Wayne's Search component for ingredient search
app.get('/stores?', (req, res) => {
  let { ingredient } = req.query;
  //ingredient is [query1, query2, query3, ...]
  db.Store.find({ 'ingredients.name': { $all: ingredient } }).limit(5)
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


app.get('/search/recipes?', (req, res) => {
  let { ingredient } = req.query;
  console.log('ingredient:', ingredient)
  db.Recipe.find({ 'ingredients.name': ingredient }).limit(3)
    .then((recipes) => {
      console.log('recipe', recipes)
      res.status(200).send(recipes);
    })
    .catch((error) => {
      res.status(404).send(error);
    })
})
/************************************************************************/
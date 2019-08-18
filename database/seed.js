const mongoose = require('mongoose');
const { Recipe, Store } = require('./index.js');
const recipeSeed = require('./recipeData.js')
const storeSeed = require('./storeData.js')

const seedRecipes = () => {
  Recipe.create(recipeSeed)
    .then(() => {
      console.log('Recipes seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedRecipes();

const seedStores = () => {
  Store.create(storeSeed)
    .then(() => {
      console.log('Stores seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedStores();

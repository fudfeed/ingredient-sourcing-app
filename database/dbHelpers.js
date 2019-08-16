const { Recipe, Store } = require('./index.js');

const getAllRecipes = () => {
  return Recipe.find()
}

const getAllStores = () => {
  return Store.find()
}

module.exports = { 
  getAllRecipes,
  getAllStores
}
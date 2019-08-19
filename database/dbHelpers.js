const { Recipe, Store } = require('./index.js');

const getAllRecipes = () => {
  return Recipe.find().sort({_id: -1})
}

const getAllStores = () => {
  return Store.find().sort({rating: 1}).limit(5)
}

const postRecipe = (payload) => {
  return Recipe.create(payload) 
}

module.exports = { 
  getAllRecipes,
  getAllStores,
  postRecipe
}

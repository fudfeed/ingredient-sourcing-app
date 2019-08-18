const { Recipe, Store } = require('./index.js');

const getAllRecipes = () => {
  return Recipe.find()
}

const getAllStores = () => {
  return Store.find()
}

const postRecipe = (payload) => {
  return Recipe.create(payload) 
}

module.exports = { 
  getAllRecipes,
  getAllStores,
  postRecipe
}

/*
(err) => {
    if (err) {
      console.log('error postRecipe dbHelper')
    } else {
      console.log(`${payload} added`)
    }
  })
*/
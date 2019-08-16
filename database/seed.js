const mongoose = require('mongoose');
const { Recipe, Store } = require('./index.js');
const faker = require('faker');
const recipe = require('./recipeData.js')
const storeSeed = require('./storeData.js')

const recipeSeed = () => {
  let output = [], i;
  for (i = 0; i < 100; i++) {
    const id = i + 1;
    const chef = { 
      name: faker.internet.userName(),
      avatar: faker.image.avatar()
    }
    const commentLen = Math.floor(Math.random() * 5)
    let comments = []
    for(let j = 0; j < commentLen; j++) {
      let comment = {
        body: faker.lorem.sentences(),
        chef: {
          name: faker.internet.userName(),
          avatar: faker.image.avatar()
        },
        rating: Math.ceil(Math.random() * 5),
        date: new Date(Math.floor(Math.random() * 26791440) + 1539129600)
      }
      comments.push(comment)
    }
    output[i] = {
      id,
      chef,
      name: recipe[i].title,
      ingredients: recipe[i].ingredients,
      instructions: recipe[i].instructions,
      comments,
      hashtags: recipe[i].hashtags,
      photo: recipe[i].image
    }
  }
  return output
}

const seedRecipes = () => {
  Recipe.create(recipeSeed())
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedRecipes();

const seedStores = () => {
  Store.create(storeSeed)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedStores();

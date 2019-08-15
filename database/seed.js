const mongoose = require('mongoose');
const {Recipe, Store} = require('./index.js');
const faker = require('faker');
const data = require('./buildData')

const recipeSeed = () => {
  let output = [], i;
  for (i = 0; i < 100; i++) {
    const id = i + 1;
    const chef = faker.internet.userName()
    const len = Math.ceil(Math.random()*18)
  }
  output = {
    id,
    chef,

  }
  return output;
}

const storeSeed = () => {
  let output = [];

  return output;
}

const seedRecipes  = () => {
  Recipe.create(recipeSeed)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedRecipes ();

const seedStores = () => {
  Store.create(storeSeed)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedStores();
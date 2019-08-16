var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fudFeed', { useNewUrlParser: true })
  .then(() => console.log('mongoose connected successfully'))
  .catch(() => console.log('mongoose connection error'));

const recipeSchema = mongoose.Schema(
  {
    id: { type: Number, required: true }, //unique: true for index
    name: { type: String, required: true },
    chef: {
      name: { type: String, required: true },
      avatar: { type: String, required: true }
    },
    ingredients: [{
      name: { type: String, required: true },
      quantity: { type: String, required: true },
      source: { type: String }
    }],
    instructions: { type: String, required: true },
    comments: [{
      body: { type: String },
      chef: { 
        name: { type: String, required: true },
        avatar: { type: String, required: true }
      },
      rating: { type: Number, required: true },
      date: { type: String, required: true },
    }],
    hashtags: [{
      type: String, required: true
    }],
    photo: { type: String, required: true }
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

const storeSchema = mongoose.Schema(
  {
    id: { type: Number, required: true }, //unique: true for index
    name: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    score: { type: Number, required: true },
    ingredients: [{
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }]
  }
);

const Store = mongoose.model('Store', storeSchema);

module.exports = { Recipe, Store }
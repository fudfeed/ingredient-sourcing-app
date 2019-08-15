const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
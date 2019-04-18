'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true
});

module.exports = mongoose;

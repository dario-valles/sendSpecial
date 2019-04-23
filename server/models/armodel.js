'use strict';
const db = require('../db');

const modelsSchema = db.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  screenshotUrl: {
    type: String,
    required: true
  },
  scale: {
    type: Number,
    default: 1
  },
  time: {
    type: Date,
    default: Date.now
  }
});

modelsSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
modelsSchema.set('toJSON', {
  virtuals: true
});

const modelModels = db.model('models', modelsSchema);
// Duplicate the ID field.

module.exports = modelModels;

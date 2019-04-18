'use strict';
const db = require('../db');

const materialSchema = db.Schema({
  title: {
    type: String,
    required: true
  },
  screenshotUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  time: {
    type: Date,
    default: Date.now
  }
});
// Duplicate the ID field.
materialSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
materialSchema.set('toJSON', {
  virtuals: true
});

const materialModels = db.model('material', materialSchema);

module.exports = materialModels;

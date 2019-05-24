'use strict';
const db = require('../db');

const usersSchema = db.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

usersSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
usersSchema.set('toJSON', {
  virtuals: true
});

const modelUsers = db.model('users', usersSchema);
// Duplicate the ID field.

module.exports = modelUsers;

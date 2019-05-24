'use strict';
const Users = require('../models/users');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.postNewUSer = async ctx => {
  const { firstName, lastName, password, email } = ctx.request.body;
  password = await bcrypt.hash(password, saltRounds);
  const result = await Users.create({
    firstName,
    lastName,
    password,
    email
  });
  ctx.body = result;
  ctx.status = 201;
};

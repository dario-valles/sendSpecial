'use strict';
require('dotenv').config();
const compress = require('koa-compress');
const koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const app = (module.exports = new koa());
const router = require('./routes.js');

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(compress());

app.listen(port);
// eslint-disable-next-line
console.log('Listening to %s', port);

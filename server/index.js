'use strict';
require('dotenv').config();
const compress = require('koa-compress');
const koa = require('koa');
const cors = require('koa2-cors');
//const koabodyParser = require('koa-bodyparser');
const koabodyParser = require('koa-body');

const app = (module.exports = new koa());
const router = require('./routes.js');

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

app
  .use(cors())
  .use(koabodyParser({ multipart: true }))
  //.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(compress());

app.listen(port);
// eslint-disable-next-line
console.log('Listening to %s', port);

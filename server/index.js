'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const compress = require('koa-compress');
const koa = require('koa');
const cors = require('koa2-cors');
const parser = require('koa-body');
const app = (module.exports = new koa());
const router = require('./routes.js');
const errorHandler = require('./middlewares/errror-handler');

const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(parser({multipart: true}))
  .use(errorHandler())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(compress());

app.listen(port);
// eslint-disable-next-line
console.log('Listening to %s', port);

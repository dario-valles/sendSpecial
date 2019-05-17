'use strict';
const ArModels = require('../models/armodel');

exports.getModels = async ctx => {
  const result = await ArModels.find();
  ctx.body = result;
  ctx.status = 200;
};

exports.getModelById = async ctx => {
  ctx.body = await ArModels.findById(ctx.params.id);
  ctx.status = 200;
};

exports.postModel = async ctx => {
  const { title, description, url, screenshotUrl, scale } = ctx.request.body;
  const result = await ArModels.create({
    title,
    description,
    url,
    screenshotUrl,
    scale
  });
  ctx.body = result;
  ctx.status = 201;
};

exports.deleteModel = async ctx => {
  await ArModels.findByIdAndRemove(ctx.params.id);
  ctx.status = 200;
  ctx.body = 'Error on server';
  ctx.status = 500;
};

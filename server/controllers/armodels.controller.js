'use strict';
const ArModels = require('../models/armodel');

exports.getModels = async ctx => {
  try {
    const result = await ArModels.find();
    ctx.body = result;
    ctx.status = 200;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

exports.getModelById = async ctx => {
  try {
    ctx.body = await ArModels.findById(ctx.params.id);
    ctx.status = 200;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

exports.postModel = async ctx => {
  try {
    const { title, description, url, screenshotUrl } = ctx.request.body;
    const result = await ArModels.create({
      title,
      description,
      url,
      screenshotUrl
    });
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

exports.deleteModel = async ctx => {
  try {
    await ArModels.findByIdAndRemove(ctx.params.id);
    ctx.status = 200;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

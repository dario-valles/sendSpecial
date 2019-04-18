'use strict';
const Materials = require('../models/material');

exports.getMaterials = async ctx => {
  try {
    let result = await Materials.find();
    result = result.map(el => {
      el.screenshotUrl = process.env.MATERIAL_IMG_URL + el.screenshotUrl;
      return el;
    });
    ctx.body = result;
    ctx.status = 200;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

exports.postMaterial = async ctx => {
  try {
    const { title, screenshotUrl, price } = ctx.request.body;
    const result = await Materials.create({
      title,
      screenshotUrl,
      price
    });
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

exports.deleteMaterial = async ctx => {
  try {
    await Materials.findByIdAndRemove(ctx.params.id);
    ctx.status = 200;
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

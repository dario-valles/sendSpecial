'use strict';
const Materials = require('../models/material');

exports.getMaterials = async ctx => {
  let result = await Materials.find();
  result.forEach(el => {
    el.screenshotUrl = process.env.MATERIAL_IMG_URL + el.screenshotUrl;
  });
  ctx.body = result;
  ctx.status = 200;
};
exports.getMaterialById = async ctx => {
  const result = await Materials.findById(ctx.params.id);
  result.screenshotUrl = process.env.MATERIAL_IMG_URL + result.screenshotUrl;
  ctx.body = result;
  ctx.status = 200;
};

exports.postMaterial = async ctx => {
  const { title, screenshotUrl, price } = ctx.request.body;
  const result = await Materials.create({
    title,
    screenshotUrl,
    price
  });
  ctx.body = result;
  ctx.status = 201;
};

exports.deleteMaterial = async ctx => {
  await Materials.findByIdAndRemove(ctx.params.id);
  ctx.status = 200;
};

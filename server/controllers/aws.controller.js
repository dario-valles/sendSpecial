'use strict';
const ArModels = require('../models/armodel');
const AWSMangement = require('../services/awsmanagement');
const fs = require('fs');

const template = fs.readFileSync(
  __dirname + '/../assets/template.html',
  'utf-8'
);

exports.sendAWS = async ctx => {
  try {
    const {
      id,
      text,
      vertical,
      lightAnimation,
      objectAnimation
    } = ctx.request.body;
    const model = await ArModels.findById(id);
    const customTemplate = template
      .replace('{url}', model.url, 'gi')
      .replace('{text}', text, 'gi')
      .replace('{orientation}', vertical ? 90 : 0)
      .replace(
        '{lightAnimation}',
        lightAnimation
          ? `<a-entity animation="property: rotation; to: 0 0 360; dur: 4000; easing: linear; loop: true">
      <a-entity mixin="light" position="30 0 0"></a-entity></a-entity>`
          : ''
      )
      .replace(
        '{objectAnimation}',
        objectAnimation
          ? `animation="property: rotation; to: 360 360 0; loop: true; dur: 10000"`
          : ''
      );

    const generatedURL = await AWSMangement.sendToS3(customTemplate);
    ctx.body = {
      generated_url: generatedURL,
      generated_html: customTemplate
    };
  } catch (error) {
    ctx.body = 'Error on server';
    ctx.status = 500;
  }
};

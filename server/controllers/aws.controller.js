'use strict';
const ArModels = require('../models/armodel');
const AWSMangement = require('../services/awsmanagement');
const fs = require('fs');

const template = fs.readFileSync(
  __dirname + '/../assets/template.html',
  'utf-8'
);

exports.sendMediaAWS = async ctx => {
  //const file = ctx.request.files.file;
  // console.log(ctx.request.body);
  //console.log(ctx.request.files);
  const file = fs.readFileSync(ctx.request.files.file.path);
  console.log(file);

  const result = await AWSMangement.sendAudioToS3(file);
  ctx.body = { audio_url: result };
};

exports.sendAWS = async ctx => {
  const {
    id,
    audio,
    details,
    vertical,
    lightAnimation,
    objectAnimation
  } = ctx.request.body;
  const model = await ArModels.findById(id);
  const customTemplate = template
    .replace('{url}', model.url, 'gi')
    .replace('{text}', details.text, 'gi')
    .replace('{name}', details.name, 'gi')
    .replace('{sender}', details.sender, 'gi')
    .replace('{orientation}', vertical ? 90 : 0, 'gi')
    .replace('{audio}', audio || 'audio/welcome.mp3')
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
        ? `animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"`
        : ''
    );

  const generatedURL = await AWSMangement.sendToS3(customTemplate);
  ctx.body = {
    generated_url: generatedURL,
    generated_html: customTemplate
  };
};

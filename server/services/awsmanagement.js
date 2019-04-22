'use strict';
const AWS = require('aws-sdk');
const uniqid = require('uniqid');
const { BitlyClient } = require('bitly');
const qrcode = require('qrcode-terminal');

const baseUrl = process.env.AWS_BASE_DIRECTORY_URL;
const bucketHtmlFiles = process.env.AWS_BUCKET_DIRECTORY;
const bucketAudioFiles = process.env.AWS_BUCKET_DIRECTORY_AUDIO;

const s3 = new AWS.S3({
  credentials: {
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    accessKeyId: process.env.AWS_S3_ACCES_KEY
  }
});

const bitly = new BitlyClient(process.env.BITLY_TOKEN, {});

exports.sendAudioToS3 = async audio => {
  const fileName = uniqid() + '.webm';
  console.log(audio);
  const url = await s3.putObject(
    {
      Bucket: bucketAudioFiles,
      Key: fileName,
      Body: audio,
      ContentType: 'audio/webm'
    },
    (err, data) => {}
  );
  return baseUrl + 'audio/' + fileName;
};

exports.sendToS3 = async template => {
  const fileName = uniqid() + '.html';

  const url = await s3.putObject(
    {
      Bucket: bucketHtmlFiles,
      Key: fileName,
      Body: template,
      ContentType: 'text/html'
    },
    function(resp) {}
  );
  if (url) {
    try {
      const result = await bitly.shorten(baseUrl + fileName);
      qrcode.generate(result.url);
      return result.url;
    } catch (e) {
      throw e;
    }
  }
};

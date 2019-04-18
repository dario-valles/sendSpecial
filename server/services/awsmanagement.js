'use strict';
const AWS = require('aws-sdk');
const uniqid = require('uniqid');
const { BitlyClient } = require('bitly');
const qrcode = require('qrcode-terminal');

const baseUrl = process.env.AWS_BASE_DIRECTORY_URL;
const bucket = process.env.AWS_BUCKET_DIRECTORY;

const s3 = new AWS.S3({
  credentials: {
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    accessKeyId: process.env.AWS_S3_ACCES_KEY
  }
});

const bitly = new BitlyClient(process.env.BITLY_TOKEN, {});

exports.sendToS3 = async template => {
  const fileName = uniqid() + '.html';

  const url = await s3.putObject(
    {
      Bucket: bucket,
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

require('dotenv').config()
const AWS = require('aws-sdk')
const addresses = require('./addresses');
const testHtml = require('./examples/1');
// console.log(testHtml);
const { createTemplate } = require('./src/template');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}




createTemplate(SESConfig);
console.log(createTemplate);

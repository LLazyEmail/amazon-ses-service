const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');

const sendTemplatedEmail = ({ params }) => {
    try {
        return new AWS.SES(SESConfig).sendTemplatedEmail(params).promise();
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { sendTemplatedEmail }
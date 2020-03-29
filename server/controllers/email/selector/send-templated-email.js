const AWS = require('aws-sdk');

const sendTemplatedEmail = ({SESConfig, params}) => {
    try {
        return new AWS.SES(SESConfig).sendTemplatedEmail(params).promise();
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { sendTemplatedEmail }
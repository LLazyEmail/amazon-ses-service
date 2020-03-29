const AWS = require('aws-sdk');


const sendTemplatedEmail = async ({SESConfig, params}) => {
    try {
        const sendPromise = await new AWS.SES(SESConfig).sendTemplatedEmail(params).promise();
        console.log(sendPromise);

    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { sendTemplatedEmail }
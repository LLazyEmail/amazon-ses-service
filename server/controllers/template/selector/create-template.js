const AWS = require('aws-sdk');

const createTemplate = async ({ SESConfig, params }) => {
    try {
        return await new AWS.SES(SESConfig).createTemplate(params).promise();

    } catch (err) {
       console.log("error", err);
       
    }
}

module.exports = { createTemplate };
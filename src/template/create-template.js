const AWS = require('aws-sdk');

const createTemplate = async ({ SESConfig, params }) => {
    try {
        const templatePromise = await new AWS.SES(SESConfig).createTemplate(params).promise();
        console.log(templatePromise);
        return templatePromise;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { createTemplate };
const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');

const updateTemplate = async ({ params }) => {
    try {
        const result = new AWS.SES(SESConfig).updateTemplate(params).promise();
        return result;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { updateTemplate }
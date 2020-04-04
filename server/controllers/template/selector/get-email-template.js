const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');

const getEmailTemplate = async ({ TemplateName }) => {
    try {
        let template = await new AWS.SES(SESConfig).getTemplate({ TemplateName: TemplateName || "test-template" }).promise();
        return template;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { getEmailTemplate };
const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');

const getEmailTemplate = async ({ templateName }) => {
    try {
        let template = await new AWS.SES(SESConfig).getTemplate({ TemplateName: templateName }).promise();
        return template;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { getEmailTemplate };
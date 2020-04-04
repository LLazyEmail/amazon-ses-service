const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');

const deleteTemplate = async ({ TemplateName }) => {
    try {
        const result = await new AWS.SES(SESConfig).deleteTemplate({ TemplateName }).promise();
        return result;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { deleteTemplate }
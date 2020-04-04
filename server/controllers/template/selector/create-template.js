const AWS = require('aws-sdk');
const htmlTemplate = require('../../../../examples/2')
const { SESConfig } = require('../../../../config');

const createTemplate = async ({ TemplateName }) => {
    try {
        let params = {
            Template: {
                TemplateName: TemplateName || 'test-template',
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: htmlTemplate,
                TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
            }
        }

        return await new AWS.SES(SESConfig).createTemplate(params).promise();

    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { createTemplate };
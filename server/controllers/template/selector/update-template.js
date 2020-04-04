const AWS = require('aws-sdk');

const { SESConfig } = require('../../../../config');
const htmlTemplate = require('../../../../examples/2');

const updateTemplate = async ({ TemplateName }) => {
    let params = {
            Template: {
                TemplateName: TemplateName || "test-template",
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: htmlTemplate,
                TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
            }
        }

    try {
        const result = new AWS.SES(SESConfig).updateTemplate(params).promise();
        return result;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { updateTemplate }
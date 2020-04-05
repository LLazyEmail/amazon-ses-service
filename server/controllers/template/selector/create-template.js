const htmlTemplate = require('../../../../examples/2')

const createTemplate = async ({ TemplateName, ses }) => {
    try {
        let params = {
            Template: {
                TemplateName: TemplateName || 'test-template',
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: htmlTemplate,
                TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
            }
        }

        return await ses.createTemplate(params).promise();

    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { createTemplate };
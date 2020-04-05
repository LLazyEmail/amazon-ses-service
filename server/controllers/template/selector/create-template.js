const zappierTemplate = require('../envelops/zappier-template');


const createTemplate = async ({ TemplateName, ses }) => {
    try {
        let params = {
            Template: {
                TemplateName: TemplateName || 'test-template',
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: zappierTemplate,
                TextPart: "Dear {{name}}"
            }
        }

        return await ses.createTemplate(params).promise();

    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { createTemplate };
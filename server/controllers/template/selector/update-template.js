const zappierTemplate = require('../envelops/zappier-template');

const updateTemplate = async ({ TemplateName, ses }) => {
    let params = {
            Template: {
                TemplateName: TemplateName || "test-template",
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: zappierTemplate,
                TextPart: "Dear {{name}}."
            }
        }

    try {
        const result = ses.updateTemplate(params).promise();
        return result;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { updateTemplate }
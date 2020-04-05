const htmlTemplate = require('../../../../examples/1');

const updateTemplate = async ({ TemplateName, ses }) => {
    let params = {
            Template: {
                TemplateName: TemplateName || "test-template",
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: htmlTemplate,
                TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
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
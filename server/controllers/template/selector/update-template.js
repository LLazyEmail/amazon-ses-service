const zappierTemplate = require('../envelops/zappier-template');
// var fs = require('fs');
// const path = require('path');

// let zappierTemplate = fs.readFileSync(path.resolve(__dirname, '../envelops/zappier-template.html'), 'utf8');

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
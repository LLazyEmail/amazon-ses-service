// const zappierTemplateHTML = require('../envelops/zappier-template');
var fs = require('fs');
const path = require('path');

let zappierTemplate = fs.readFileSync(path.resolve(__dirname, '../envelops/zappier-template.html'), 'utf8')

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
        console.log(params);
        
        // return params
        return await ses.createTemplate(params).promise();

    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { createTemplate };
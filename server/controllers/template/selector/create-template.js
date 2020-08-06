// const zappierTemplateHTML = require('../envelops/zappier-template');
const zappierTemplate = require('../envelops/zappier-template');
const hackernoonTemplate = require('../../../hackernoon-template');
const hackernoon-template-new = require('../envelops/hackernoon-template-new')
// var fs = require('fs');
// const path = require('path');

// let zappierTemplate = fs.readFileSync(path.resolve(__dirname, '../envelops/zappier-template.html'), 'utf8')

const createTemplate = async ({ TemplateName, ses }) => {
    try {
        let params = {
            Template: {
                TemplateName: TemplateName || 'test-template',
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: hackernoonTemplate,
                TextPart: "Dear {{name}}"
            }
        }
        // return params
        return await ses.createTemplate(params).promise();

    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { createTemplate };
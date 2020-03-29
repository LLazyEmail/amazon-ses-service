const { createTemplate } = require('./selector')
const htmlTemplate = require('../../../examples/2');

const createTemplateController = (req, res, next) => {
    try {
        let params = {
            Template: {
                TemplateName: 'MyTemplate1',
                SubjectPart: 'Greetings, {{name}}!',
                HtmlPart: htmlTemplate,
                TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
            }
        }

        const result = await createTemplate({ SESConfig, params })
        res.send(result)
    } catch (err) {
        return next('Server error templateController', err)
    }
}

module.exports = { createTemplateController }

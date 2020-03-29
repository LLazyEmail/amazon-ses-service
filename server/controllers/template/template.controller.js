const { createTemplate, getEmailTemplate } = require('./selector')
const htmlTemplate = require('../../../examples/2');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

const createTemplateController = async (req, res, next) => {
    try {
        let params = {
            Template: {
                TemplateName: 'MyTemplate2',
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

const getEmailTemplateController = async (req, res, next) =>{
    console.log(req.body.name);
    try{
        if(req.body.name){
            const template = await getEmailTemplate({ SESConfig, templateName: req.body.name });
            res.send(template)
        }else {
            return next("Error. Template name undefined")
        }
    }catch(err){
        return next("Server error", err)
    }
    
    

    
}
module.exports = { createTemplateController, getEmailTemplateController }

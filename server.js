require('dotenv').config()
const addresses = require('./addresses');
const { sendTemplatedEmail } = require('./src/email');

// const addresses = require('./addresses');
const htmlTemplate = require('./examples/1');
// console.log(testHtml);
const { createTemplate, getListTemplates, getEmailTemplate, updateTemplate } = require('./src/template');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

// working code


const start = async () => {
    // working

    // const templates = await getListTemplates({
    //     SESConfig
    // })
    // console.log(templates);

    // --------------------
    // const template = await getEmailTemplate({ SESConfig, templateName: 'MyTemplate' });
    // console.log(template);

    // -------
    // let params = {
    //     Template: {
    //         TemplateName: 'MyTemplate1',
    //         SubjectPart: 'Greetings, {{name}}!',
    //         HtmlPart: htmlTemplate,
    //         TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
    //     }
    // }

    // const response = await createTemplate({ SESConfig, params })
    // console.log(response);
    // -----
    // let params = {
    //     Template: {
    //         TemplateName: 'MyTemplate1',
    //         SubjectPart: 'Greetings, {{name}}!',
    //         HtmlPart: htmlTemplate,
    //         TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
    //     }
    // }

    // const result = await updateTemplate({ SESConfig, params });
    // console.log(result);

    // -----
    // ------------------------------------------
    let params = {
        Source: process.env.SOURCE,
        Template: "MyTemplate1",
        Destination: {
            ToAddresses: [...addresses]
        },
        TemplateData: JSON.stringify({
            name: "Arthur!!! - sended template usnig aws template",
            favoriteanimal: "dog", 
            htmlList: `<ul style="color: red;"><li>First</li><li>Second</li></ul>`
        })
    }
    sendTemplatedEmail({
        SESConfig,
        params
    })


}

start()




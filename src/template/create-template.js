const createTemplate = async () => {
    // let params = {
    //     Template: {
    //         TemplateName: 'TEST_TEMPLATE1',
    //         HtmlPart: 'HTML_CONTENT',
    //         SubjectPart: 'SUBJEXT_LINE',
    //         TextPart: 'TEXT_CONTENT'
    //     }
    // }

    let params = {
        Template: {
            TemplateName: 'MyTemplate',
            SubjectPart: 'Greetings, {{name}}!',
            HtmlPart: '<h1>Hello {{name}},</h1><p>Your favorite animal is {{favoriteanimal}}.</p>',
            TextPart: "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}."
        }
    }
    try {
        const templatePromise = await new AWS.SES(SESConfig).createTemplate(params).promise();
        console.log(templatePromise);
    } catch (err) {
        console.log(err);

    }
}

module.exports = { createTemplate };
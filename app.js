require('dotenv').config();
let express = require('express')
const bodyParser = require('body-parser')
let app = express();

const email = require('./server/routes/email/email.routes');
const template = require('./server/routes/template/template.routes');
// let aws = require('aws-sdk');
// const addresses = require('./addresses');
// const { sendTemplatedEmail } = require('./server/controllers/email/selector');

// const { createTemplate, getListTemplates, getEmailTemplate, updateTemplate } = require('./server/controllers/template/selector');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/email', email);
app.use('/template', template);

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port: 3000");
})

const start = async () => {
    // working

    // const templates = await getListTemplates({
    //     SESConfig
    // })
    // console.log(templates);

    // --------------------


    // -------

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


}

// start()

// console.log(aws);



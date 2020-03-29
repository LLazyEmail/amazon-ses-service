require('dotenv').config()
const AWS = require('aws-sdk')
const addresses = require('./addresses');
const testHtml = require('./examples/1');
// console.log(testHtml);

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

const params = {
    Destination: {
        ToAddresses: addresses
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: testHtml
            },
            Text: {
                Charset: 'UTF-8',
                Data: 'This is the message body in text format.'
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email from code'
        }
    },
    ReturnPath: process.env.RETURN_PATH,
    Source: process.env.SOURCE
};

const sendEmail = () => {
    try {
        //call one send Email for one recipients
        //@TODO improve this code
        new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {
            console.log("res", res);
        })

    } catch{
        console.log('err');
    }
};

sendEmail()

// const getListTemplates = () => {
//     try {
//         let templatePromise = new AWS.SES(SESConfig).listTemplates({ MaxItems: 5 }).promise();
//         templatePromise.then((data) => {
//             console.log("data", data);

//         }).catch((err) =>{
//             console.log(err);
//         })
//     } catch{
//         console.log("error");
        
//     }
// }
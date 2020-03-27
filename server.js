require('dotenv').config()
const AWS = require('aws-sdk')
const addresses = require('./addresses');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

function generateHTMLInquiryEmail(email, message) {
    return `
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset='UTF-8' />
         <title>title</title>
       </head>
       <body>
        <table border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='bodyTable'>
         <tr>
             <td align='center' valign='top'>
                 <table border='0' cellpadding='20' cellspacing='0' width='600' id='emailContainer'>
                     <tr style='background-color:#99ccff;'>
                         <td align='center' valign='top'>
                             <table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailBody'>
                                 <tr>
                                     <td align='center' valign='top' style='color:#337ab7;'>
                                         <h3>${message}</h3>
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                     <tr style='background-color:#74a9d8;'>
                         <td align='center' valign='top'>
                             <table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailReply'>
                                 <tr style='font-size: 1.2rem'>
                                     <td align='center' valign='top'>
                                         <span style='color:#286090; font-weight:bold;'>Send From:</span> <br/> ${email}
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
         </table>
       </body>
     </html>
    `
}

const params = {
    Destination: {
        ToAddresses: addresses
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: generateHTMLInquiryEmail("vadim.putrov", 'All is ok')
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

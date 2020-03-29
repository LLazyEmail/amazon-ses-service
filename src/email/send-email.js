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

const sendEmail = (SESConfig) => {
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

module.exports = { sendEmail };
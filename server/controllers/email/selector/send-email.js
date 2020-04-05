const testHtml = require('../../../../examples/2');

const sendEmail = ({ addresses, ses }) => {
    const params = {
        Destination: {
            ToAddresses: [...addresses]
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

    try {

        return ses.sendEmail(params).promise();

    } catch (err) {
        console.log('err', err);
    }
};

module.exports = { sendEmail };
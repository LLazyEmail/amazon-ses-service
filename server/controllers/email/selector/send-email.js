const AWS = require('aws-sdk');

const testHtml = require('../../../../examples/2');
const { SESConfig } = require('../../../../config');

const sendEmail = ({ ToAddresses }) => {
    const params = {
        Destination: {
            ToAddresses
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

        return new AWS.SES(SESConfig).sendEmail(params).promise();

    } catch (err) {
        console.log('err', err);
    }
};

module.exports = { sendEmail };
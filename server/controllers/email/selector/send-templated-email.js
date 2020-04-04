const AWS = require('aws-sdk');
const { SESConfig } = require('../../../../config');
const list = require('../components/List/list');
const { getItems } = require('../components/Items/items');

const sendTemplatedEmail = ({ addresses, TemplateName }) => {
    try {
        let templatedData = {
            name: "Vadim",
            animal: getItems(),
            favoriteanimal: "Cat",
            htmlList: list
        };

        let params = {
            Source: process.env.SOURCE,
            Template: "MyTemplate1",
            Destination: {
                ToAddresses: [...addresses]
            },
            TemplateData: JSON.stringify(templatedData)
        }

        return new AWS.SES(SESConfig).sendTemplatedEmail(params).promise();

        // ses.sendEmail(params, (err, data) => {
        //     if (err) {
        //         return console.log(err, err.stack);
        //     } else {
        //         console.log("Email sent.", data);
        //     }
        // });
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { sendTemplatedEmail }
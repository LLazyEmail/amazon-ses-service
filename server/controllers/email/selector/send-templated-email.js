const list = require('../../../middleware/List/list');
const { getItems } = require('../../../middleware/Items/items');

const sendTemplatedEmail = ({ Addresses, TemplateName, ses }) => {
    try {
        let templateData = {
            name: "Vadim",
            listItems: getItems(),
        };

        let params = {
            Source: process.env.SOURCE,
            Template: TemplateName,
            Destination: {
                ToAddresses: [...Addresses]
            },
            TemplateData: JSON.stringify(templateData)
        }

        return ses.sendTemplatedEmail(params).promise();

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
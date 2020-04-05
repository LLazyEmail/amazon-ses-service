const list = require('../../../middleware/list/list');
const { getItems } = require('../../../middleware/items/items');
const { sponsorsBlock } = require('../../../middleware/sponsors-block/sponsorsBlock');


const sendTemplatedEmail = ({ Addresses, TemplateName, ses }) => {
    try {
        let templateData = {
            name: "Vadim",
            listItems: getItems(),
            sponsors: sponsorsBlock
        };

        let params = {
            Source: process.env.SOURCE,
            Template: TemplateName,
            Destination: {
                ToAddresses: [...Addresses]
            },
            TemplateData: JSON.stringify(templateData)
        }
        // console.log(params);

        // return sponsorsBlock;

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
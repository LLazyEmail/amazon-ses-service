const { sendEmail, sendTemplatedEmail } = require('./selector');
const list = require('./components/List/list');
const { getItems } = require('./components/Items/items');


const sendEmailController = async (req, res, next) => {
    try {
        if (req.body.addresses) {
            const ToAddresses = [...req.body.addresses];

            const result = await sendEmail({ ToAddresses })
            res.send(result)
        } else {
            return next("Error addressess undefined")
        }

    } catch (err) {
        return next("Server error sendEmail")
    }
}

const sendTemplatedEmailController = async (req, res, next) => {
    try {


        if (req.body.addresses) {

            let params = {
                Source: process.env.SOURCE,
                Template: "MyTemplate1",
                Destination: {
                    ToAddresses: [...req.body.addresses]
                },
                TemplateData: JSON.stringify({
                    name: "Vadim",
                    animal: getItems(),
                    htmlList: list
                })
            }
            // console.log();
            
            const result = await sendTemplatedEmail({ params });

            res.send(result);
        } else {
            return next("Error addresses undefined")
        }

    } catch (err) {
        return next("Server error sendTemplatedEmail")
    }
}

module.exports = {
    sendEmailController,
    sendTemplatedEmailController
}
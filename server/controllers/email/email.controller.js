const { sendEmail, sendTemplatedEmail } = require('./selector');

const testController = async (req, res, next) => {
    res.send("Hello")
}

const sendEmailController = async (req, res, next) => {
    try {
        if (!req.body.Addresses) {
            return next("Error addressess undefined")
        }

        const result = await sendEmail({ ...req.body, ses: req.ses })
        res.send(`Sended email successfully. Date: ${new Date()}`)

    } catch (err) {
        return next("Server error sendEmail")
    }
}

const sendTemplatedEmailController = async (req, res, next) => {
    try {

        if (!req.body.Addresses) {
            return next("Error addresses not specified")
        }

        const result = await sendTemplatedEmail({ ...req.body, ses: req.ses });
        res.send(`Sended email successfully. Date: ${new Date()}`)
    } catch (err) {
        return next("Server error sendTemplatedEmail")
    }
}

module.exports = {
    sendEmailController,
    sendTemplatedEmailController,
    testController
}
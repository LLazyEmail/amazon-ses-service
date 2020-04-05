const { sendEmail, sendTemplatedEmail } = require('./selector');

const testController = async (req,res, next) =>{
    res.send("Hello")
}

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

        if (!req.body.addresses) {
            return next("Error addresses not specified")
        }

        const result = await sendTemplatedEmail({ ...req.body });
        res.send(result);
    } catch (err) {
        return next("Server error sendTemplatedEmail")
    }
}

module.exports = {
    sendEmailController,
    sendTemplatedEmailController,
    testController
}
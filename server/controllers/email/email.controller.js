const { sendEmail, sendTemplatedEmail } = require('./selector');

const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}

const sendEmailController = async (req, res, next) => {
    try {
        if(req.body.addresses){
            const ToAddresses = [...req.body.addresses];

            const result = await sendEmail({ SESConfig, ToAddresses })
            res.send(result)
        }else{
            return next("Error addressess undefined")
        }
        
    } catch (err) {
        return next("Server error sendEmail")
    }
}

const sendTemplatedEmailController = async (req, res, next) => {
    try {
        if(req.body.addresses){

            let params = {
                Source: process.env.SOURCE,
                Template: "MyTemplate1",
                Destination: {
                    ToAddresses: [...req.body.addresses]
                },
                TemplateData: JSON.stringify({
                    name: "Vadim",
                    favoriteanimal: "dog",
                    htmlList: `<ul style="color: red;"><li>First</li><li>Second</li></ul>`
                })
            }
            const result = await sendTemplatedEmail({
                SESConfig,
                params
            });
            
            res.send(result);
        }else{
            return next("Error addresses undefined")
        }
        
    }catch(err){
        return next("Server error sendTemplatedEmail")
    }
}

module.exports = {
    sendEmailController,
    sendTemplatedEmailController
}
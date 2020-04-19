const AWS = require('aws-sdk');
const { SESConfig } = require('../../config');

// @TODO complete making singleton 
// class AWS {
//     constructor() {
//         if (AWS.exists) {
//             return AWS.instance;
//         }
//         this._aws = aws.SES(SESConfig)
//         AWS.instance = this;
//         AWS.exists = true;
//         return this;
//     }
    
// }


const ses = new AWS.SES(SESConfig);

const setAWS = (req, res, next) => {
    req.ses = ses;

    console.log("In middleware");
    next()
}

module.exports = { setAWS }
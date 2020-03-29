const AWS = require('aws-sdk');

const updateTemplate = async ({SESConfig, params}) => {
    try{
        const result = new AWS.SES(SESConfig).updateTemplate(params).promise();
        return result;
    }catch(err){
        console.log("err", err);
        
    }
}

module.exports = { updateTemplate }
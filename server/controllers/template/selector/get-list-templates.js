const AWS = require('aws-sdk');

const { SESConfig } = require('../../../../config');

const getListTemplates = async ({ MaxItems = 5 }) => {
    try {
        console.log('In try');
        
        let listTemplates = await new AWS.SES(SESConfig).listTemplates({ MaxItems }).promise();
        // console.log(listTemplates);
        console.log(listTemplates);

        return listTemplates
        // templatePromise.then((data) => {
        //     console.log("data", data);

        // }).catch((err) =>{
        //     console.log(err);
        // })
    } catch (err) {
        console.log("error", err);

    }
}

module.exports = { getListTemplates };
const getListTemplates = async () => {
    try {
        let templatePromise = await new AWS.SES(SESConfig).listTemplates({ MaxItems: 5 }).promise();
        console.log(templatePromise);
        
        // templatePromise.then((data) => {
        //     console.log("data", data);

        // }).catch((err) =>{
        //     console.log(err);
        // })
    } catch{
        console.log("error");
        
    }
}

module.exports = getListTemplates;
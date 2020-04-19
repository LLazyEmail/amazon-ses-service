
const getEmailTemplate = async ({ TemplateName, ses }) => {
    try {
        let template = await ses.getTemplate({ TemplateName: TemplateName || "test-template" }).promise();
        return template;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { getEmailTemplate };
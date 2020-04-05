
const deleteTemplate = async ({ TemplateName, ses }) => {
    try {
        const result = await ses.deleteTemplate({ TemplateName }).promise();
        return result;
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = { deleteTemplate }
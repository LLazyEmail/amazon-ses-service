const { createTemplate } = require('./create-template');
const { getListTemplates } = require('./get-list-templates');
const { getEmailTemplate } = require('./get-email-template');
const { updateTemplate } = require('./update-template');

module.exports = {
    createTemplate,
    getListTemplates,
    getEmailTemplate,
    updateTemplate
}
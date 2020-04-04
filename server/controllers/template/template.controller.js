const {
    createTemplate,
    getEmailTemplate,
    getListTemplates,
    updateTemplate,
    deleteTemplate
} = require('./selector')

const createTemplateController = async (req, res, next) => {
    try {
        const result = await createTemplate({ ...req.body })
        res.send(result)
    } catch (err) {
        return next('Server error templateController', err)
    }
}

const getEmailTemplateController = async (req, res, next) => {
    console.log(req.body.name);
    try {
        if (req.body.TemplateName) {
            const template = await getEmailTemplate({ ...req.body });
            res.send(template)
        } else {
            return next("Error. Template name undefined")
        }
    } catch (err) {
        return next("Server error", err)
    }
}

const getListTemplatesController = async (req, res, next) => {
    console.log(req.body);

    try {
        const listTemplates = await getListTemplates({ ...req.body })
        res.send(listTemplates)
    } catch (err) {
        return next("Server error", err)
    }
}

const updateTemplateController = async (req, res, next) => {
    try {
        const updatedTemplate = await updateTemplate({ ...req.body });
        res.send(updatedTemplate)
    } catch (err) {
        return next("Server error", err)
    }
}

const deleteTemplateController = async (req, res, next) => {
    try {
        const result = await deleteTemplate({ ...req.body });
        res.send(result)
    } catch (err) {
        console.log("err", err);
    }
}
module.exports = {
    createTemplateController,
    getEmailTemplateController,
    getListTemplatesController,
    updateTemplateController,
    deleteTemplateController
}

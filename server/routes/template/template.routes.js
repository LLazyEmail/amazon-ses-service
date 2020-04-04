const express = require('express');
const router = express.Router();
const { 
    createTemplateController,
    getEmailTemplateController,
    getListTemplatesController,
    updateTemplateController,
    deleteTemplateController
} = require('../../controllers/template/template.controller');

router.post('/create', createTemplateController)
router.post('/get-template', getEmailTemplateController);
router.post('/get-list-templates', getListTemplatesController)
router.put('/update-template', updateTemplateController)
router.delete('/delete', deleteTemplateController)
module.exports = router;
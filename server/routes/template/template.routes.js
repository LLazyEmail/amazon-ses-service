const express = require('express');
const router = express.Router();
const { createTemplateController,
    getEmailTemplateController,
    getListTemplatesController,
    updateTemplateController 
} = require('../../controllers/template/template.controller');

router.post('/create', createTemplateController)
router.post('/get-template', getEmailTemplateController);
router.post('/get-list-templates', getListTemplatesController)
router.post('/update-template', updateTemplateController)

module.exports = router;
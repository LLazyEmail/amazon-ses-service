const express = require('express');
const router = express.Router();
const {
    createTemplateController,
    getEmailTemplateController,
    getListTemplatesController,
    updateTemplateController,
    deleteTemplateController
} = require('../../controllers/template/template.controller');

const { setAWS } = require('../../middleware/aws-middleware');

router.post('/create',setAWS, createTemplateController)
router.post('/get-template',setAWS, getEmailTemplateController);
router.post('/get-list-templates',setAWS, getListTemplatesController)
router.put('/update-template',setAWS, updateTemplateController)
router.delete('/delete',setAWS, deleteTemplateController)

module.exports = router;
const express = require('express');
const router = express.Router();
const { createTemplateController, getEmailTemplateController } = require('../../controllers/template/template.controller');

router.post('/create', createTemplateController)
router.post('/get-template', getEmailTemplateController);
module.exports = router;
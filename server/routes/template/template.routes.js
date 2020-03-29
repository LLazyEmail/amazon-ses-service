const express = require('express');
const router = express.Router();
const { createTemplateController } = require('../../controllers/template/template.controller');

router.post('/create', createTemplateController)

module.exports = router;
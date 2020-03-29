const express = require('express');
const router = express.Router();
const { sendEmailController, sendTemplatedEmailController } = require('../../controllers/email/email.controller');

router.post('/send', sendEmailController);
router.post('/send-templated', sendTemplatedEmailController);

module.exports = router;
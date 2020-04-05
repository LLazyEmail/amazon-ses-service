const express = require('express');
const router = express.Router();
const { sendEmailController, sendTemplatedEmailController, testController } = require('../../controllers/email/email.controller');

router.get('/test', testController)
router.post('/send', sendEmailController);
router.post('/send-templated', sendTemplatedEmailController);
router.get('/send-templated', (req, res, next) => {
    sendTemplatedEmailController({
        body: {
            addresses: JSON.parse(req.query.addresses)
        }
    }, res, next)
})
router.get('/send', (req, res, next) => {
    sendEmailController({
        body: {
            addresses: JSON.parse(req.query.addresses)
        }
    }, res, next)
})
module.exports = router;
const express = require('express');
const router = express.Router();
const { sendEmailController, sendTemplatedEmailController, testController } = require('../../controllers/email/email.controller');
const { setAWS } = require('../../middleware/aws-middleware');

router.get('/test', setAWS, testController)
router.post('/send', setAWS, sendEmailController);
router.post('/send-templated', setAWS, sendTemplatedEmailController);
router.get('/send-templated', setAWS, (req, res, next) => {
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
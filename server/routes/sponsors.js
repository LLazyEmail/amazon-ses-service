const cookieParser = require('cookie-parser')();

const getSponsor = require('../controllers/sponsor/get-sponsor');
const { apiIsAuth } = require('./middleware/auth');

module.exports = function(app){
  app.get('/api/sponsor', apiIsAuth, cookieParser, (req, res) => {
    getSponsor(req, res);
  });
};

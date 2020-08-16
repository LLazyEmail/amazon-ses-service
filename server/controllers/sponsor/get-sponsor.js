const sponsor = require('../../models').sponsor;

module.exports = (req, res) =>{
  // const userId = req.user.id;
  sponsor.findAll({
    raw: true
  }).then((instancesArray) => {
    res.send(instancesArray);
  });
};


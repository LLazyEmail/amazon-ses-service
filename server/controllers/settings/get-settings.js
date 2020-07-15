const { error } = require('jquery');

const Setting = require('../../models').setting;

module.exports = function(req, res) {

  /*
    NOTE: This file returns boolean values to the client for fields that have values assigned.
  */
console.log("userId", req.user.id);

  Setting.findOne({
    where:{
      userId: req.user.id
    },
    attributes: [
      'amazonSimpleEmailServiceAccessKey',
      'amazonSimpleEmailServiceSecretKey',
      'amazonSimpleQueueServiceUrl',
      'region',
      'whiteLabelUrl',
      'email'
    ]
  }).then(settingsInstance => {
    console.log("settingsInstance", settingsInstance);
    
    const settingsObject = settingsInstance.get({ plain:true });
    const settingsObjectToBool = {};
    Object.keys(settingsObject).forEach(key => {
      if (settingsObject[key])
        settingsObjectToBool[key] = true;
    });
    res.send(settingsObjectToBool);
  }).catch(err => {
    console.error(err);
    res.status(500).send(err);
  });

};

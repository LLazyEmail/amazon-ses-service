'use strict';
const crypto = require('crypto')
const algorithm = 'aes-256-ctr';
const password = process.env.ENCRYPTION_PASSWORD;
const IV_LENGTH = 16;

if (!password) {
  throw new Error('AWS encryption password was empty. Set a password by providing the ENCRYPTION_PASSWORD environment variable in .env');
}

module.exports = function(sequelize, DataTypes) {
  let setting = sequelize.define('setting', {
    userId: DataTypes.INTEGER,
    amazonSimpleEmailServiceAccessKey: { type: DataTypes.STRING, defaultValue: '' },
    amazonSimpleEmailServiceSecretKey: { 
      type: DataTypes.STRING, 
      defaultValue: '' 

    },
    // amazonSimpleEmailServiceSecretKey: {
    //   type: DataTypes.STRING, 
    //   defaultValue: '' ,
    //   // This virtual datatype allows us to abstract away the encryption and decryption of the AWS keys.
    //   // Decryption and encryption are handled by the get and set functions below and act on the
    //   // amazonSimpleEmailServiceSecretKeyEncrypted column where the encrypted key is stored. Because of this,
    //   // there is actually no amazonSimpleEmailServiceSecretKey column.
    //   // type: new DataTypes.VIRTUAL(DataTypes.STRING, ['amazonSimpleEmailServiceSecretKeyEncrypted']),
    //   set: function (val) {
    //     console.log("set", iv);
        
    //     let iv = crypto.randomBytes(IV_LENGTH);
    //     const cipher = crypto.createCipheriv(algorithm, Buffer.from(password), iv)
    //     let crypted = cipher.update(val,'utf8','hex')
    //     crypted += cipher.final('hex');
    //     this.setDataValue('amazonSimpleEmailServiceSecretKey', crypted);
    //   },
    //   get: function () {
    //     let val = this.getDataValue('amazonSimpleEmailServiceSecretKey');
    //     console.log("val",val);
    //     let textParts = val.split(':');
    //     let iv = Buffer.from(val.shift(), 'hex');
    //     let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    //     const decipher = crypto.createDecipheriv(algorithm,  Buffer.from(password), iv);
    //     let dec = decipher.update(encryptedText,'hex','utf8');
    //     dec += decipher.final('utf8');
    //     return dec;
    //   }
    // },
    amazonSimpleQueueServiceUrl: { type: DataTypes.STRING, defaultValue: '' },
    region: { type: DataTypes.STRING, defaultValue: '' },
    whiteLabelUrl: { type: DataTypes.STRING, defaultValue: '' },
    email: { type: DataTypes.STRING, defaultValue: '' }
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //     setting.belongsTo(models.user);
    //   }
    // }
  });

  setting.associate = function(models) {
    // associations can be defined here
    setting.belongsTo(models.user);
  };

  return setting;
};

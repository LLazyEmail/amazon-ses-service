'use strict';
module.exports = function(sequelize, DataTypes) {
  let campaignsubscriber = sequelize.define('campaignsubscriber', {
    email: DataTypes.STRING,
    messageId: DataTypes.STRING,
    status: DataTypes.STRING,
    bounceType: DataTypes.STRING,
    bounceSubType: DataTypes.STRING,
    sent: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     campaignsubscriber.belongsTo(models.campaign, { foreignKeyConstraint: true });
    //     campaignsubscriber.belongsTo(models.listsubscriber, { foreignKeyConstraint: true });
    //   }
    // },
    indexes: [
      {
        fields:['email']
      },
      {
        fields:['sent']
      },
      {
        fields:['listsubscriberId']
      },
      {
        fields:['campaignId']
      }
    ]
  });

  campaignsubscriber.associate = function(models) {
    campaignsubscriber.belongsTo(models.campaign, { foreignKeyConstraint: true });
    campaignsubscriber.belongsTo(models.listsubscriber, { foreignKeyConstraint: true });
  };
  return campaignsubscriber;
};

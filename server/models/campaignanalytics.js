'use strict';

module.exports = function(sequelize, DataTypes) {
  let campaignanalytics = sequelize.define('campaignanalytics', {
    complaintCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    permanentBounceCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    transientBounceCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    undeterminedBounceCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    clickthroughCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    openCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    totalSentCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    trackLinksEnabled: { type: DataTypes.BOOLEAN, defaultValue: true },
    // campaignId: DataTypes.INTEGER
    },
    {
    freezeTableName: true,  // because CampaignAnalyticss is a silly name
    // classMethods: {
    //   associate: function(models) {
    //     campaignanalytics.belongsTo(models.campaign);
    //     campaignanalytics.hasMany(models.campaignanalyticslink);
    //     campaignanalytics.hasMany(models.campaignanalyticsopen);
    //   }
    // }
  });

  campaignanalytics.associate = function(models) {
    campaignanalytics.belongsTo(models.campaign);
    campaignanalytics.hasMany(models.campaignanalyticslink);
    campaignanalytics.hasMany(models.campaignanalyticsopen);
  };
  // campaignanalytics.associate = (models) => {
  //   campaignanalytics.belongsTo(models.campaign);
  //   campaignanalytics.hasMany(models.campaignanalyticslink);
  //   campaignanalytics.hasMany(models.campaignanalyticsopen);
  // }
  // campaignanalytics.belongsTo(sequelize.models.campaign)
  return campaignanalytics;
};

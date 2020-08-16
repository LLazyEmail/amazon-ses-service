'use strict';
const sponsorTop = require('../hackernoon-template/sponsor-top');
const sponsorBottom = require('../hackernoon-template/sponsor-bottom');

const sponsorAblyTopBottom = require('../hackernoon-template-copy/sponsor');

module.exports = function(sequelize, DataTypes) {
    let sponsor = sequelize.define('sponsor', {
        sponsorName: DataTypes.STRING,
        sponsorTop: DataTypes.TEXT,
        sponsorBottom: DataTypes.TEXT,
    }, {

    });

    // sponsor.associate = function(models) {
    //     // associations can be defined here
    //     sponsor.belongsTo(models.user);
    // };

    sponsor.addHook('afterSync',() => {
        sponsor.findOne({where:{sponsorName: 'bybit'}})
        .then((sponsorName)=>{
          if(sponsorName === null){
              sponsor.create({
              sponsorName: 'bybit',
              sponsorTop,
              sponsorBottom
            });
          }
        })
        .catch((error) => {
            console.error(error);
        });

        sponsor.findOne({where:{sponsorName: 'ably'}})
        .then((sponsorName)=>{
          if(sponsorName === null){
              sponsor.create({
              sponsorName: 'ably',
              sponsorTop: sponsorAblyTopBottom,
              sponsorBottom: sponsorAblyTopBottom
            });
          }
        })
        .catch((error) => {
            console.error(error);
        });

        return null;
      });

    return sponsor;
};

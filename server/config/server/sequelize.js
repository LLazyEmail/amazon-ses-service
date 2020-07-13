const db = require('../../models');

module.exports = async () => {
  const { sequelize } = db;

  try{
   await sequelize.sync({force:false,hooks:true});
  }catch(err){
    console.error("Error", err);
  }
};

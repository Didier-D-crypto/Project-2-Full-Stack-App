'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    name: DataTypes.STRING,
    itineraryId: {
      type: DataTypes.INTEGER
    }
    // activity: DataTypes.STRING,
     //add new column
    // 
  });
  Cities.associate = (models) => {
    Cities.hasMany(models.Itineraries), {
      foreignKey: { 
        allowNull: false
      }
    }
  };
  return Cities;
};


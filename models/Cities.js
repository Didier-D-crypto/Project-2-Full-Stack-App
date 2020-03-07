"use strict";
module.exports = (sequelize, DataTypes) => {
  
  const Cities = sequelize.define('Cities', {
    name: DataTypes.STRING,
    itinerary_id: {
      type: DataTypes.INTEGER
    }
     
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

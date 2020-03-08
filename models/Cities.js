"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    itinerary_id: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
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

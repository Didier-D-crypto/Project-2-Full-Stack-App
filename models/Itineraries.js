'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itineraries = sequelize.define('Itineraries', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    city: DataTypes.STRING,
    food: DataTypes.STRING,
    activities: DataTypes.STRING,
    nigthtime: DataTypes.STRING,
    reviews: DataTypes.STRING
    // 
  }, {});
  Itineraries.associate = function(models) {
    // associations can be defined here
  };
  return Itineraries;
};

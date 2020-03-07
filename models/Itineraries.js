'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itineraries = sequelize.define('Itineraries', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    city: DataTypes.STRING,
    food: DataTypes.STRING,
    activities: DataTypes.STRING,
    nigthtime: DataTypes.STRING,
    reviews: DataTypes.STRING, 
    usersId: {
      type: DataTypes.INTEGER
    },
    cityId: {
      type: DataTypes.INTEGER
    }
  });

  Itineraries.associate = (models) => {
    /* foreignKey was 'usersId' */
    Itineraries.belongsTo(models.User), {
      foreignKey: {
      allowNull: false
    }
  }};
  return Itineraries;
};


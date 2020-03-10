"use strict";
module.exports = (sequelize, DataTypes) => {
  const Itineraries = sequelize.define("Itineraries", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    city: DataTypes.STRING,
    food: DataTypes.STRING,
    activities: DataTypes.STRING,
    nighttime: DataTypes.STRING,
    reviews: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      /* added 3/7/19*/
      required: true,
      allowNull: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: true
    },
  });

  Itineraries.associate = models => {
    Itineraries.belongsTo(models.User),
      {
        foreignKey: {
          allowNull: true
        }
      };
    Itineraries.associate = models => {
      Itineraries.hasMany(models.Cites, {});
    };
  };
  return Itineraries;
};

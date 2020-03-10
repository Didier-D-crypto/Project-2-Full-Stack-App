"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define("Cities", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    itineraries_id: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: true
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE
    }
  });
  Cities.associate = models => {
    Cities.hasMany(models.Itineraries),
      {
        foreignKey: {
          allowNull: true
        }
      };
  };
  return Cities;
};

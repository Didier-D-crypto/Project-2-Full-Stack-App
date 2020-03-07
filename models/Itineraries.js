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
    user_id: {
      type: DataTypes.INTEGER
    },
    city_id: {
      type: DataTypes.INTEGER
    }
  });

  Itineraries.associate = (models) => {    
    Itineraries.belongsTo(models.User), {
      foreignKey: {
        allowNull: false
      }
    }
    Itineraries.associate = (models) => {
      Itineraries.hasMany(models.Cites, {
      });
    };
  };
  return Itineraries;
};


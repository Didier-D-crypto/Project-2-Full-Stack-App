
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itineraries = sequelize.define('Itineraries', {
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
    nigthtime: DataTypes.STRING,
    reviews: DataTypes.STRING, 
    user_id: {
      type: DataTypes.INTEGER, 
      /* added 3/7/19*/
      required: true,
      allowNull: false
    },
    city_id: {
    type: DataTypes.INTEGER,
    required: true,
    allowNull: false
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

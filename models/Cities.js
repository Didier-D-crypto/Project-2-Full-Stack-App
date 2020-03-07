"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    "Cities",
    {
      name: DataTypes.STRING
      // activity: DataTypes.STRING,
      //add new column
      //
    },
    {}
  );
  Cities.associate = function(models) {
    // associations can be defined here
  };
  return Cities;
};

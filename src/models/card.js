"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    givenName: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    houseNumber: DataTypes.NUMBER,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    state: DataTypes.STRING,
    postcode: DataTypes.NUMBER,
    country: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  return Card;
};

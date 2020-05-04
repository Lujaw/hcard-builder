"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      givenName: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      houseNumber: {
        type: Sequelize.NUMBER
      },
      street: {
        type: Sequelize.STRING
      },
      suburb: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.NUMBER
      },
      country: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cards");
  }
};

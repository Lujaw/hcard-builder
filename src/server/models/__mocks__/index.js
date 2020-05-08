const SequelizeMock = require("sequelize-mock");
const { sampleCard } = require("../../utils/testing");
const dbMock = new SequelizeMock();
const db = {
  Card: dbMock.define("Card", sampleCard)
};

module.exports = db;
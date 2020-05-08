const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();
const db = {
  Card: dbMock.define("Card", {
    givenName: "Sam",
    surname: "Fairfax",
    email: "sam.fairfax@fairfaxmedia.com.au",
    phone: "0292822833",
    houseNumber: "100",
    street: "Harris Street",
    suburb: "Pyrmont",
    state: "NSW",
    postcode: "2009",
    country: "Australia",
    avatar: "/static/public/img/Avatar.png"
  })
};

module.exports = db;
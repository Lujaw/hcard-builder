import SequelizeMock from "sequelize-mock";

const dbMock = new SequelizeMock();

const CardMock = dbMock.define("Card", {
  id: "1",
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
  avatar: "/static/public/img/avatar.png"
});

jest.mock("../../../models", () => ({
  Card: CardMock
}));


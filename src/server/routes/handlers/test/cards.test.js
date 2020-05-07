const { getCards, getCardById } = require("../cards");

const req = { params: { id: "1" } };
const res = {
  json: (model) => model,
  status: () => ({
    send: jest.fn()
  })
};

const sampleCard = {
  "givenName": "Sam",
  "surname": "Fairfax",
  "email": "sam.fairfax@fairfaxmedia.com.au",
  "phone": "0292822833",
  "houseNumber": "100",
  "street": "Harris Street",
  "suburb": "Pyrmont",
  "state": "NSW",
  "postcode": "2009",
  "country": "Australia",
  "avatar": "/static/public/img/Avatar.png"
};

jest.mock("../../../models", () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return {
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
});


describe("Card handler", () => {
  it("getCardById should return the single card by id", async () => {
    const card = await getCardById(req, res);
    expect(card).toEqual(expect.objectContaining(sampleCard));
  });
  it("getCards should return all the cards", async () => {
    const [card] = await getCards(req, res);
    expect(card).toEqual(expect.objectContaining(sampleCard));
  });
});

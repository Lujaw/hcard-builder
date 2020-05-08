const { getCards, getCardById } = require("../cards");
const { mockRequest, mockResponse, sampleCard } = require("../../../utils/testing");

jest.mock("../../../models");

describe("Card handler", () => {
  it("getCardById should return the single card by id", async () => {
    const req = mockRequest({ params: { id: 1 } });
    const res = mockResponse();
    await getCardById(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(sampleCard));
  });
  it("getCards should return all the cards", async () => {
    const req = mockRequest({});
    const res = mockResponse();
    await getCards(req, res);
    expect(res.json).toHaveBeenCalledWith([expect.objectContaining(sampleCard)]);
  });
});

import { getCards, getCardById } from "../cards";
import { mockRequest, mockResponse, mockNext, sampleCard } from "../../../utils/testing";

jest.mock("../../../models");

describe("Card handler", () => {
  it("getCardById should return the single card by id", async () => {
    const req = mockRequest({ params: { id: 1 } });
    const res = mockResponse();
    const next = mockNext();
    await getCardById(req, res, next);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(sampleCard));
  });
  it("getCards should return all the cards", async () => {
    const req = mockRequest({});
    const res = mockResponse();
    const next = mockNext();
    await getCards(req, res, next);
    expect(res.json).toHaveBeenCalledWith([expect.objectContaining(sampleCard)]);
  });
});

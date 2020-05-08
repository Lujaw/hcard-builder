const { handleSubmit } = require("../submit");
const { mockRequest, mockResponse } = require("../../../utils/testing");

jest.mock("../../../models");

describe("Submit handler", () => {
  describe("when Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({ body: {} });
      const res = mockResponse();
      await handleSubmit(req, res);
      expect(res.redirect).toHaveBeenCalledWith("/cards");
    });
  });
  describe("when valid Id is present", () => {
    it("should update the card with given id", async () => {
      const req = mockRequest({ body: { id: 1 } });
      const res = mockResponse();
      await handleSubmit(req, res);
      expect(res.redirect).toHaveBeenCalledWith("/cards");
    });
  });
});

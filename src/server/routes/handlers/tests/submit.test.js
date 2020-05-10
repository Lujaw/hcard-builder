import handleSubmit from "../submit";
import { mockRequest, mockResponse, mockNext } from "../../../utils/testing";

jest.mock("../../../models");

describe("Submit handler", () => {
  describe("when Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({ body: {} });
      const res = mockResponse();
      const next = mockNext();
      await handleSubmit(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith("/cards");
    });
  });

  describe("when valid Id is present", () => {
    it("should update the card with given id", async () => {
      const req = mockRequest({ body: { id: 1 } });
      const res = mockResponse();
      const next = mockNext();
      await handleSubmit(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith("/cards");
    });
  });
});

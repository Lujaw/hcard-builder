import handleUpdate from "../update";
import { mockRequest, mockResponse, mockNext }  from "../../../utils/testing";

jest.mock("../../../models");

describe("Update handler", () => {
  describe("when valid Id is present", () => {
    it("should update the card with the given Id", async () => {
      const req = mockRequest({
        body: {
          id: 1,
          surname: "Shrestha"
        }
      });
      const res = mockResponse();
      const next = mockNext();
      await handleUpdate(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
  });
  describe("when Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({
        body: {
          surname: "Shrestha"
        }
      });
      const res = mockResponse();
      const next = mockNext();
      await handleUpdate(req, res, next);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalledWith();
    });
  });
});

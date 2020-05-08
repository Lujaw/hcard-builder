import handleUpdate from "../update";
import { mockRequest, mockResponse }  from "../../../utils/testing";

jest.mock("../../../models");

describe("Update handler", () => {
  describe("when valid Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({
        body: {
          id: 1,
          surname: "Shrestha"
        }
      });
      const res = mockResponse();
      await handleUpdate(req, res);
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
      await handleUpdate(req, res);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalledWith([]);
    });
  });
});

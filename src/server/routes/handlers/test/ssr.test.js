const { handleSsr } = require("../ssr");
const { mockRequest, mockResponse } = require("../../../utils/testing");

jest.mock("../../../models");

describe("SSR handler", () => {
  describe("when valid Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({
        url: "/caras/1" 
      });
      const res = mockResponse();
      await handleSsr(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([1]);
    });
  });
});

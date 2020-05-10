import handleSubmit from "../submit";
import {
  mockRequest, mockResponse,
  mockNext, SequelizeValidationError
} from "../../../utils/testing";
import db from "../../../models";
const { Card } = db;

jest.mock("../../../models");


beforeEach(() => {
  Card.$queryInterface.$clearHandlers();
  Card.$queryInterface.$clearQueue();
});

describe("Submit handler", () => {
  describe("when Id is absent", () => {
    it("should create a new card if card id is not present", async () => {
      const req = mockRequest({ body: {} });
      const res = mockResponse();
      const next = mockNext();
      await handleSubmit(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith("/card/1");
    });
  });

  describe("when valid Id is present", () => {
    it("should update the card with given id", async () => {
      const req = mockRequest({ body: { id: 1 } });
      const res = mockResponse();
      const next = mockNext();
      await handleSubmit(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith("/card/1");
    });
    it("should return 422 if there is validation error", async () => {
      const id = 41;
      const req = mockRequest({ body: { id } });
      const res = mockResponse();
      const next = mockNext();

      // queing validation error to test the validation failure case
      Card.$queryInterface.$queueFailure(new SequelizeValidationError(
          "Validation failed",
          [{ message: "surname validation failed" }]
      ));

      await handleSubmit(req, res, next);
      expect(res.status).toHaveBeenCalledWith(422);
      expect(res.json).toHaveBeenCalledWith({
        message: "Validation failed",
        details: ["surname validation failed"]
      });
    });

    it("should call the next function with error if card cannot be create/updated", async () => {
      const id = 42;
      const req = mockRequest({ body: { id } });
      const res = mockResponse();
      const next = mockNext();

      // queing validation error to test the validation failure case
      Card.$queryInterface.$queueFailure(new Error(
          "Could not submit the card."
      ));

      await handleSubmit(req, res, next);
      expect(next).toHaveBeenCalledWith(new Error("Could not submit the card."));
    });
  });
});

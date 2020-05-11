import handleUpdate from "../update";
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

    it("should call the next function with error if card cannot be found", async () => {
      const id = 42;
      const req = mockRequest({ body: { id } });
      const res = mockResponse();
      const next = mockNext();

      Card.$queryInterface.$useHandler((query, queryOptions, done) => {
        if (query === "update" && queryOptions[1].where.id === id) {
          return null;
        }
      });

      await handleUpdate(req, res, next);
      expect(next).toHaveBeenCalledWith(new Error("Could not update the card."));
    });

    it("should return 422 if there is validation error", async () => {
      const id = 41;
      const req = mockRequest({ body: { id } });
      const res = mockResponse();
      const next = mockNext();

      // queing validation error to test the validation failure case
      Card.$queryInterface.$queueFailure(new SequelizeValidationError("Validation failed", [{ message: "surname validation failed" }]));

      await handleUpdate(req, res, next);
      expect(res.status).toHaveBeenCalledWith(422);
      expect(res.json).toHaveBeenCalledWith({
        message: "Validation failed",
        details: ["surname validation failed"]
      });
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
      expect(next).toHaveBeenCalledWith(new Error("Could not update the card."));
    });
  });
});

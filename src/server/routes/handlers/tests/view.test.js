import nock from "nock";
import handleViews from "../views";
import {
  mockRequest, mockResponse,
  mockNext, sampleCard
} from "../../../utils/testing";
import db from "../../../models";
import view from "../../../../shared/helpers/view";

const { Card } = db;
jest.mock("../../../models");

beforeEach(() => {
  Card.$queryInterface.$clearHandlers();
  Card.$queryInterface.$clearQueue();
});

const httpUrl = "http://localhost:3000";

describe("SSR handler", () => {
  describe("for single card route", () => {
    it("should send the hcard component with single card", async () => {
      const url = "/card/1";
      nock(httpUrl)
        .get(`/api${url}`)
        .reply(200, sampleCard);

      const req = mockRequest({
        url: url,
        path: url
      });

      const res = mockResponse();
      const next = mockNext();
      const expectedView = view.renderTemplateMarkup(url, sampleCard);
      await handleViews(req, res, next);
      expect(res.send).toHaveBeenCalledWith(expectedView);
    });
  });

  describe("for all cards route", () => {
    it("should send the HcardList component with all cards", async () => {
      const url = "/cards";
      nock(httpUrl)
        .get(`/api${url}`)
        .reply(200, [sampleCard]);

      const req = mockRequest({
        url: url,
        path: url
      });

      const res = mockResponse();
      const next = mockNext();
      const expectedView = view.renderTemplateMarkup(url, [sampleCard]);
      await handleViews(req, res, next);
      expect(res.send).toHaveBeenCalledWith(expectedView);
    });
  });
});

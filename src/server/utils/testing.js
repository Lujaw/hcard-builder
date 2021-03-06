const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.redirect = jest.fn().mockReturnValue(res);
  res.url = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = ({ body, params, url, path }) => {
  return {
    ...(body && { body }),
    ...(params && { params }),
    ...(url && { url }),
    ...(path && { path })
  };
};

const mockNext = () => {
  return jest.fn();
};

// As the sequelize mock doesn't provide validation helpers, creating Validation Error for testing
class SequelizeValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = "SequelizeValidationError";
    this.errors = errors;
  }
}
const sampleCard = {
  "givenName": "Sam",
  "surname": "Fairfax",
  "email": "sam.fairfax@fairfaxmedia.com.au",
  "phone": "0292822833",
  "houseNumber": "100",
  "street": "Harris Street",
  "suburb": "Pyrmont",
  "state": "NSW",
  "postcode": "2009",
  "country": "Australia",
  "avatar": "/static/public/img/avatar.png"
};

export {
  mockResponse,
  mockRequest,
  mockNext,
  sampleCard,
  SequelizeValidationError
};

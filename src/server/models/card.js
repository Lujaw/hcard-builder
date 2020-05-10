"use strict";
module.exports = (sequelize, DataTypes) => {
  const isAlphaNumericWithSpaceOrDash = (fieldName) => ({
    args: /[\w\s\.-]+$/,
    msg: `Validation isAlphaNumericWithSpaceOrDash on ${fieldName} failed`
  });

  const Card = sequelize.define("Card", {
    givenName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    surname: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    houseNumber: {
      type: DataTypes.STRING,
      validate: {
        is: isAlphaNumericWithSpaceOrDash("houseNumber")
      }
    },
    street: {
      type: DataTypes.STRING,
      validate: {
        is: isAlphaNumericWithSpaceOrDash("street")
      }
    },
    suburb: {
      type: DataTypes.STRING,
      validate: {
        is: isAlphaNumericWithSpaceOrDash("suburb")
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    postcode: {
      type: DataTypes.NUMBER,
      validate: {
        isNumeric: true
      }
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    avatar: DataTypes.STRING
  }, {});
  return Card;
};

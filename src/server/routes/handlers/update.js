import db from "../../models";
const { Card } = db;


/**
 * Update route handler function
 * @module update
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/

const handleUpdate = async (req, res, next) => {
  try {
    const { id, ...values } = req.body;
    if (Number(id)) {
      const card = await Card.update(values, { where: { id } });
      if (card) {
        return res.status(200).json(card);
      }
    }
    throw new Error("Could not update the card.");
  } catch (err) {
    // send 422 if there is any validation errors
    if (err.name === "SequelizeValidationError") {
      res.status(422).json({
        message: "Validation failed",
        details: err.errors.map(({ message }) => message)
      });
    }
    next(err);
  }
};

export default handleUpdate;

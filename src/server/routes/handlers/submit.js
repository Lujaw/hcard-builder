import db from "../../models";
const { Card } = db;

/**
 * Submit route handler function
 * @module submit
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const handleSubmit = async (req, res, next) => {
  try {
    const { id, ...values } = req.body;
    let card;
    // if there is no id in the request, we create a new card, otherwise update the card
    if (Number(id)) {
      card = await Card.update(values, { where: { id } });
      return res.redirect(`/card/${id}`);
    } else {
      card = await Card.create(values);
      const { id: cardId } = card.dataValues;
      // redirecting the table of cards when the creation is successful
      return res.redirect(`/card/${cardId}`);
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({
        message: "Validation failed",
        details: err.errors.map(({ message }) => message)
      });
    } else {
      next(err);
    }
  }
};

export default handleSubmit;

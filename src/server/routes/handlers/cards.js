import db from "../../models";
const { Card } = db;

/** @module cards */

/**
 * Retrieve all the cards from the DB
 * @function getCards
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @return {Object[]} List of all the cards in DB
 */
const getCards = async (req, res, next) => {
  try {
    const cards = await Card.findAll();
    if (cards) {
      return res.json(cards);
    }
    return res.status(404).json();
  } catch (err) {
    next(err);
  }
};

/**
 * Retrieve a single card from the DB by using id
 * @function getCardById
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @return {Object} Single card json
 */
const getCardById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const card = await Card.findOne({ where: { id } });
    if (card) {
      return res.json(card);
    }
    return res.status(404).json();
  } catch (err) {
    next(err);
  }
};

export {
  getCardById,
  getCards
};

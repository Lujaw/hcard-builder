import db from "../../models";
const { Card } = db;

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

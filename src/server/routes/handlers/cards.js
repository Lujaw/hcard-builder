import db from "../../models";
const { Card } = db;

const getCards = (req, res, next) => {
  return Card.findAll()
    .then((cards) => res.json(cards))
    .catch(next);
};

const getCardById = (req, res, next) => {
  const id = parseInt(req.params.id);
  return Card.findOne({ where: { id } })
    .then((cards) => res.json(cards))
    .catch(next);
};

export {
  getCardById,
  getCards
};

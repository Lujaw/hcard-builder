import { Card } from "../../models";

const getCards = (req, res) => {
  return Card.findAll()
    .then((cards) => res.json(cards))
    .catch((err) => {
      console.log("There was an error querying", JSON.stringify(err));
      return res.send(err);
    });
}

const getCardById = (req, res) => {
  const id = parseInt(req.params.id);
  return Card.findByPk(id)
    .then(({ dataValues }) => {
      res.json(dataValues);
    }).catch((err) => {
      console.log("There was an error querying", JSON.stringify(err));
      res.status(400).send(err);
    });
}

export {
  getCardById,
  getCards
} 

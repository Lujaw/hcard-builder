import db from "../../models";
const { Card } = db;

const handleUpdate = (req, res, next) => {
  const { id, ...values } = req.body;
  Card.update(values, { where: { id } })
      .then((card) => res.json(card))
      .catch(next);
};

export {
  handleUpdate
};

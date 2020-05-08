import db from "../../models";
const { Card } = db;

const handleUpdate = (req, res, next) => {
  const { id, ...values } = req.body;
  if (Number(id)) {
    return Card.update(values, { where: { id } })
      .then((card) => res.status(200).json(card))
      .catch(next);
  } else {
    return res.status(204).json([]);
  }

};

export default handleUpdate;

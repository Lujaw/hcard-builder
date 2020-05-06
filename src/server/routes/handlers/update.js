import { Card } from "../../models";

const handleUpdate = (req, res) => {
  const { id, ...values } = req.body;
  Card.update(values, { where: { id } })
    .then((card) => res.json(card));
}

export {
  handleUpdate
};

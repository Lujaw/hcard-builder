import db from "../../models";
const { Card } = db;

const handleUpdate = async (req, res, next) => {
  try {
    const { id, ...values } = req.body;
    if (Number(id)) {
      const card = await Card.update(values, { where: { id } });
      if (card) {
        return res.status(200).json(card);
      } else {
        throw new Error(`Could not update the card id- ${id}`);
      }
    } else {
      return res.status(204).json();
    }
  } catch (err) {
    next(err);
  }
};

export default handleUpdate;

import db from "../../models";
const { Card } = db;

const handleSubmit = async (req, res, next) => {
  try {
    const { id, ...values } = req.body;
    let card;
    // if there is no id in the request, we create a new card, otherwise update the card
    if (Number(id)) {
      card = await Card.update(values, { where: { id } });
    } else {
      card = await Card.create(values);
    }
    // redirecting the table of cards when the operation is successful
    if (card) {
      return res.redirect("/cards");
    } else {
      throw new Error("Could not submit the card");
    }
  } catch (err) {
    next(err);
  }
};

export default handleSubmit;

import db from "../../models";
const { Card } = db;

const handleSubmit = (req, res, next) => {
  const { id, ...values } = req.body;

  // if there is no id in the request, we create a new card, otherwise update the card
  if (Number(id)) {
    return Card.update(values, { where: { id } })
      .then(() => res.redirect("/cards"))
      .catch(next);
  } else {
    return Card.create(values)
      .then(() => res.redirect("/cards"))
      .catch(next);
  }
};

export {
  handleSubmit
};

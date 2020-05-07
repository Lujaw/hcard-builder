import db from "../../models";
const { Card } = db;

const handleSubmit = (req, res, next) => {
  const { id, ...values } = req.body;
  if (id == "") {
    Card.create(values)
        .then(() => res.redirect("/cards"))
        .catch(next);
  } else {
    Card.update(values, { where: { id } })
        .then(() => res.redirect("/cards"))
        .catch(next);
  }
};

export {
  handleSubmit
};

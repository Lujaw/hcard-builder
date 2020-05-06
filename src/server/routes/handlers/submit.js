import { Card } from "../../models";

const handleSubmit = (req, res) => {
  const { id, ...values } = req.body;
  if (id == "") {
    Card.create(values)
      .then(() => res.redirect("/cards"));
  } else {
    Card.update(values, { where: { id } })
      .then(() => res.redirect("/cards"));
  }
}

export {
  handleSubmit
} 

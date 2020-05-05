const express = require("express");
const bodyParser = require("body-parser");
const view = require("./helpers/view");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));


app.get("/", (req, res) => {
  const views = view.renderCardTemplate();
  res.send(views);
});

app.get("/cards", (req, res) => {
  return db.Card.findAll()
    .then((cards) => res.send(cards))
    .catch((err) => {
      console.log("There was an error querying", JSON.stringify(err));
      return res.send(err);
    });
});

app.get('/card/:id', (req, res) => {
  const id = parseInt(req.params.id);
  return db.Card.findByPk(id)
    .then(({ dataValues }) => {
      const views = view.renderCardTemplate(dataValues);
      res.send(views);
    })
    .catch((err) => {
      console.log('***Error deleting contact', JSON.stringify(err))
      res.status(400).send(err)
    })
});

app.post("/submit", (req, res) => {
  console.log('server#42->>>', { id: req.headers["card-id"] });
  db.Card.create(req.body)
    .then(card => res.json(card))
});

app.post("/update", (req, res) => {
  const { id, ...values } = req.body;
  db.Card.update(values, { where: { id } })
    .then(card => res.json(card))
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});


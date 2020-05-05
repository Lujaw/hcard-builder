const express = require("express");
const bodyParser = require("body-parser");
const { renderToString } = require("react-dom/server");
const { StaticRouter, matchPath } = require("react-router-dom");



const routes = require("../shared/routes").default;
const view = require("../shared/helpers/view");
const db = require("./models");

const app = express();

// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));


app.get("/card*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    const context = { ...data };
    const markup = view.renderTemplateMarkup({ url: req.url, context });

    res.send(markup);
  }).catch(next)
})


app.get("/api/cards", (req, res) => {
  return db.Card.findAll()
    .then((cards) => res.json(cards))
    .catch((err) => {
      console.log("There was an error querying", JSON.stringify(err));
      return res.send(err);
    });
});

app.get("/api/card/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Card.findByPk(id)
    .then(({ dataValues }) => {
      res.json(dataValues);
    }).catch((err) => {
      console.log("***Error deleting contact", JSON.stringify(err));
      res.status(400).send(err);
    });
});

app.post("/submit", (req, res) => {
  const { id, ...values } = req.body;
  console.log("server#43->>>", { id, values });

  if (id == "") {
    db.Card.create(values)
      .then((card) => res.json(card));
  } else {
    db.Card.update(values, { where: { id } })
      .then((card) => res.json(card));
  }
});

app.post("/update", (req, res) => {
  const { id, ...values } = req.body;
  db.Card.update(values, { where: { id } })
    .then((card) => res.json(card));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});


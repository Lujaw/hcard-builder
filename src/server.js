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

app.listen(3000, () => {
  console.log("listening on port 3000");
});


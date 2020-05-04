const express = require("express");
const bodyParser = require("body-parser");
const view = require("./helpers/view");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));

app.get("/", (req, res) => {
  const views = view.renderCardTemplate();
  res.send(views);
});


app.listen(3000, () => console.log("listening on port 3000"));


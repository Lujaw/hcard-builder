import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});


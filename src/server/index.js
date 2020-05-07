import express from "express";
import bodyParser from "body-parser";
import router from "./routes";
import { normalizePort } from "./utils";

const port = normalizePort(process.env.PORT || "3000");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

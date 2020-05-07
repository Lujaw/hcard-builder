import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./routes";
import { normalizePort } from "./utils";

const port = normalizePort(process.env.PORT || "3000");
const app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("dist/public"));

app.use("/", router);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

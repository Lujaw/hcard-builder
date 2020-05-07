import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./routes";
import { normalizePort, errorHandler } from "./utils";

const port = normalizePort(process.env.PORT || "3000");
const app = express();

// create a write stream in append mode
const logFilePath = path.join(__dirname, "access.log");
const accessLogStream = fs.createWriteStream(logFilePath, { flags: "a" });

// log all requests to access.log
app.use(morgan("combined", { stream: accessLogStream }));

// parsing the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serving public assets in static route
app.use("/static", express.static("dist/public"));

// setting the routes
app.use("/", router);

// using the error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

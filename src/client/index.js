import React from "react";
import { render } from "react-dom";

global.React = React;
const Hcard = require("./hCard.min.js").default;

render
  (
    <Hcard {...window.__INITIAL_STATE__} />,
    document.getElementById("root")
  );
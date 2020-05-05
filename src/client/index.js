import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

global.React = React;
const Hcard = require("../shared/hCard.min.js").default;

render
  (
    <BrowserRouter>
      <Hcard {...window.__HCARD_STATE__} />
    </BrowserRouter>,
    document.getElementById("root")
  );
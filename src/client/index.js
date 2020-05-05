import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
const App = require("../shared/App").default

render
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
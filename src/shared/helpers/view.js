import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import template from "../template";
import App from "../App";

const initialData = {
  avatar: "/static/img/Avatar.png"
};


const renderAppToString = (url, context) => {
  return renderToString(
    <StaticRouter location={url} context={{ ...context }}>
      <App />
    </StaticRouter>
  );
}

const renderTemplateMarkup = (url, context = initialData) =>
  template(renderAppToString(url, context), context);

export default {
  renderAppToString,
  renderTemplateMarkup
};

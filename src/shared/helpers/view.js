const React = require("react");
const ReactDOMServer = require("react-dom/server");
const StaticRouter = require("react-router-dom").StaticRouter;
const template = require("../template").default;
const App = require("../App").default;

const initialData = {
  avatar: "/static/img/Avatar.png"
};


const renderAppToString = ({ url, context }) =>
  ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

const renderTemplateMarkup = ({ url, context = initialData }) =>
  template(renderAppToString({ url, context }), context);

module.exports = {
  renderAppToString,
  renderTemplateMarkup
};

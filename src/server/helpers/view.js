const React = require("react");
const ReactDOMServer = require("react-dom/server");
const StaticRouter = require("react-router-dom").StaticRouter;

global.React = React;
const HcardComponent = require("../../shared/hCard.min.js").default;
const template = require("../../shared/template").default;

const initialData = {
  avatar: "/static/img/Avatar.png"
};

console.log('view#13->>>', { StaticRouter });

const renderCardToString = ({ url, context, data }) =>
  ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <HcardComponent {...data} />
    </StaticRouter>
  );

const renderCardTemplate = ({ url, context, data = initialData }) => template({
  body: renderCardToString({ url, context, data }),
  title: "Live hCard Preview",
  initialState: JSON.stringify(data)
});

module.exports = {
  renderCardToString,
  renderCardTemplate
};

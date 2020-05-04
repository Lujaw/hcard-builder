const React = require("react");
const ReactDOMServer = require("react-dom/server");
global.React = React;
const HcardComponent = require("../client/hCard.min.js").default;
const template = require("../client/template").default;

const initialData = {
  avatar: "/static/img/Avatar.png"
};

const renderCardToString = (data) =>
  ReactDOMServer.renderToString(
      <HcardComponent {...data} />
  );

const renderCardTemplate = (card = initialData) => template({
  body: renderCardToString(card),
  title: "Live hCard Preview",
  initialState: JSON.stringify(card)
});

module.exports = {
  renderCardToString,
  renderCardTemplate
};

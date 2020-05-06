import { matchPath } from "react-router-dom";
import routes from "../../../shared/routes";
import view from "../../../shared/helpers/view";

const handleSsr = (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData ?
    activeRoute.fetchInitialData(req.path) :
    Promise.resolve();

  promise.then((data) => {
    const context = data;
    const markup = view.renderTemplateMarkup(req.url, context);
    res.send(markup);
  }).catch(next);
};

export {
  handleSsr
}
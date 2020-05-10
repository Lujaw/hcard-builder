import { matchPath } from "react-router-dom";
import routes from "../../../shared/routes";
import view from "../../../shared/helpers/view";

const handleSsr = async (req, res, next) => {
  try {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData ?
      activeRoute.fetchInitialData(req.path) :
      Promise.resolve();

    const context = await promise;
    const markup = view.renderTemplateMarkup(req.url, context);
    return res.send(markup);
  } catch (err) {
    next(err);
  }
};

export default handleSsr;

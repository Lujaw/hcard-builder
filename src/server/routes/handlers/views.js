import { matchPath } from "react-router-dom";
import routes from "../../../shared/routes";
import view from "../../../shared/helpers/view";

const handleViews = async (req, res, next) => {
  try {
    console.log('views#7->>>', { url: req.url, path: req.path });
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    console.log('ssr#8->>>', { activeRoute });
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

export default handleViews;

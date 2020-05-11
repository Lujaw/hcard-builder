import { matchPath } from "react-router-dom";
import routes from "../../../shared/routes";
import view from "../../../shared/helpers/view";


/**
 * View route handler function
 * @module views
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @return {String} markup of the view
 */

const handleViews = async (req, res, next) => {
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

export default handleViews;

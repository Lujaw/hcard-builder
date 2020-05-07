// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// handle the errors
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500).json({ error: "Sorry, there was an error. Please try again." });
};

export {
  normalizePort,
  errorHandler
};

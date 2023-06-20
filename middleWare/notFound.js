const notFoundHandler = (req, res, next) => {
  return next(res.status(404).json({ messege: "Page not found" }));
};

module.exports = notFoundHandler;

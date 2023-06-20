const errorHandler = (err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ messege: err.messege || err || "Something went wrong" });
};

module.exports = errorHandler;

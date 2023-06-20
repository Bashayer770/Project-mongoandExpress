const Movie = require("../mongoDB/models/movie");

exports.fetchMovie = async (movieId) => {
  const foundMovie = await Movie.findById(movieId);
  return foundMovie;
};

exports.moviesCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
  }
};

exports.moviesDelete = async (req, res, next) => {
  try {
    await req.movie.deleteOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.moviesUpdate = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.moviesRatings = async (req, res, next) => {
  try {
    console.log("Hello ", req.body.ratings);
    if (req.body.ratings >= 0 && req.body.ratings <= 10) {
      await Movie.updateOne({
        $push: { ratings: [req.body.ratings] },
      });
      return res.status(204).end();
    } else {
      return res.status(401).json({
        msg: "please add a rating between 0 and 10",
      });
    }
  } catch (error) {
    return next(error);
    // await req.movie.updateOne(req.body);
  }
};

exports.moviesGet = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    return next(error);
  }
};

exports.moviebyId = (req, res, next) => {
  try {
    return res.status(200).json(req.movie);
  } catch (error) {
    return next(error);
  }
};

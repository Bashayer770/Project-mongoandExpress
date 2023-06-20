const express = require("express");
const router = express.Router();
const uploader = require("../middleWare/Uploader");

const {
  moviebyId,
  moviesCreate,
  moviesDelete,
  moviesGet,
  moviesUpdate,
  moviesRatings,
  fetchMovie,
} = require("../api/movies.controllers");

router.param("movieId", async (req, res, next, movieId) => {
  try {
    console.log("I am working");
    const foundMovie = await fetchMovie(movieId);
    if (!foundMovie) return next({ status: 404, messege: "Movie not found" });
    req.movie = foundMovie;
    next();
  } catch (error) {
    return next(error);
  }
});

router.get("/", moviesGet);
router.post("/", uploader.single("image"), moviesCreate);
router.delete("/:movieId", moviesDelete);
router.put("/:movieId", moviesUpdate);
router.put("/:movieId/rate", moviesRatings);

module.exports = router;

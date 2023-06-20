const express = require("express");
const router = express.Router();
const uploader = require("../middleWare/Uploader");

const {
  moviebyId,
  moviesCreate,
  moviesDelete,
  moviesGet,
  moviesUpdate,
  fetchMovie,
} = require("../api/movies.controllers");

router.param("movieId", async (req, res, next, movieId) => {
  try {
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

module.exports = router;

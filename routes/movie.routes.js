const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment.model");
const Rating = require("../models/Rating.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");



router.get("/:movieId/getComments", (req, res, next) => {
  const { movieId } = req.params;

  Comment.find({ movieId: req.params.movieId })
    .then((comments) => {
      console.log(comments);
      res.json({ movie: movieId, comments: comments });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve comments" });
    });
});

// POST: addComment /:movieId/addComment
router.post("/:movieId/addComment", (req, res, next) => {
  //adding comment to movie by Id
  const { author, comment } = req.body;
  const newComment = new Comment({
    author,
    comment,
    movieId: req.params.movieId,
  });

  Comment.create(newComment)
    //new comment contain the author, the comment and the movie Id where comment is made
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => next(err));
});

router.get("/:movieId/rating", (req, res, next) => {
  const { movieId } = req.params;

  Rating.findOne({ movieId: req.params.movieId })
    .then((rating) => {
      console.log(rating);
      res.json({ rating: rating });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve rating" });
    });
});

// POST: rating  /:movieId/rate
router.post("/:movieId/rate", (req, res, next) => {
  const movieId = req.params.movieId;
  const { rating } = req.body;
  const newRating = {
    ratings: rating,
    movieId: movieId,
  };

  Rating.findOne({ movieId: movieId })
    .then((resp) => {
      console.log(resp);
      if (resp !== null) {
        // Update existing item
        resp.ratings.push(rating);
        return resp.save();
      } else {
        // Create a new item

        const newRating = new Rating({ movieId: movieId, ratings: [rating] });
        console.log(newRating);
        res.json({ rating: newRating });

        return newRating.save();
      }
    })
    .then((updatedRating) => {
      console.log(updatedRating);
      // Handle further operations or return the result
      res.json({ rating: updatedRating });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});

//like dislike movies routes

// Like a movie
//check the const {userId} and the const {movieId}
router.post("/likeMovie", isAuthenticated, async (req, res, next) => {
  const { userId } = req.params;
  const { movieId } = req.body;
  console.log("likedmovie route start", req.payload);

  try {
    // Find the user by ID
    const user = await User.findById(req.payload._id);

    // Check if the user already liked the movie
    if (!user.likedMovies.includes(movieId)) {
      // Add the movie ID to the likedMovies array
      user.likedMovies.push(movieId);
      await user.save();
      // await User.findByIdAndUpdate(userId, user);
    }

    res.status(200).json({ message: "Movie liked successfully." });
  } catch (error) {
    next(error);
  }
});

//dislike movie

router.post("/:userId/dislikeMovie", async (req, res, next) => {
  const { userId } = req.params;
  const { movieId } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user already disliked the movie
    if (!user.dislikedMovies.includes(movieId)) {
      // Add the movie ID to the dislikedMovies array
      user.dislikedMovies.push(movieId);
      console.log("user dislike", user.dislikedMovie);
      await user.save();
    }

    res.status(200).json({ message: "Movie disliked successfully." });
  } catch (error) {
    next(error);
  }
});



module.exports = router;

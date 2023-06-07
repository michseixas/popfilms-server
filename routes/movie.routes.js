const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment.model");

// router.get('/:movieId', (req, res, next) => {
//     const { movieId } = req.params;

//     // Make a request to the IMDb API to get movie details
//     axios.get(`https://imdb-api.com/en/API/Title/k_xmndj5an/${movieId}`)
//       .then((response) => {
//         const movieDetails = response.data;
//         res.json(movieDetails);
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).json({ error: 'Failed to retrieve movie details' });
//       });
//   });

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

module.exports = router;

const express = require("express");
const router = express.Router();



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


// POST: addComment /:movieId/addComment
router.post("/:movieId/addComment", (req, res, next) => {
  //adding comment to movie by Id
  const { author, comment } = req.body;
  console.log(req.body);
  const newComment = {
    //new comment contain the author, the comment and the movie Id where comment is made
    author,
    comment,
    movieId: req.params.movieId,
  };
  newComment
    .save() //new comment is saved
    .then((comment) => {
      res.json(comment); //send a json response with new comment
    })
    .catch((err) => next(err));
});
  
  module.exports = router;


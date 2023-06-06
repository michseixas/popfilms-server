const express = require("express");
const router = express.Router();
const axios = require('axios');


router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;
  
    // Make a request to the IMDb API to get movie details
    axios.get(`https://imdb-api.com/en/API/Title/k_xmndj5an/${movieId}`)
      .then((response) => {
        const movieDetails = response.data;
        res.json(movieDetails);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve movie details' });
      });
  });
  
  module.exports = router;


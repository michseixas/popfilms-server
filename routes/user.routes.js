//import express to use router 
const express = require("express");
const router = express.Router();

//import the mongoose models to access the database with the methods: (find, update, delete, create, find by id, ....)
const User = require("../models/User.model");

//find user by ID and get the info
router.get("/:userId", (req, res, next) => {
//llamar al modelo user y que nos devuelva la informacion del user

// User.find(userId)
// .then(data => {
// //we get the user data and we decide what we do withthe data
// })
// .catch



})

//find user by ID and get the info
router.get("/:userId", (req, res, next) => {
    //
    })

    //find user by ID and get the info
router.get("/:userId", (req, res, next) => {
    //
    })

    //find user by ID and get the info
router.get("/:userId", (req, res, next) => {
    //
    })



    

    //like dislike movies routes


// Like a movie
//check the const {userId} and the const {movieId}
router.post("/:userId/likeMovie", async (req, res, next) => {
    const { userId } = req.params;
    const { movieId } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
  
      // Check if the user already liked the movie
      if (!user.likedMovies.includes(movieId)) {
        // Add the movie ID to the likedMovies array
        user.likedMovies.push(movieId);
        // await user.save();
        await User.findByIdAndUpdate(userId, user)
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
        await user.save();
      }
  
      res.status(200).json({ message: "Movie disliked successfully." });
    } catch (error) {
      next(error);
    }
  });


  module.exports = router;



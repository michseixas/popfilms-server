//import express to use router
const express = require("express");
const router = express.Router();

//import the mongoose models to access the database with the methods: (find, update, delete, create, find by id, ....)
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

//find user by Id and retrive data /:userId
router.get("/:userId", (req, res, next) => {
  const { userId } = req.params; //destructuring (will get userId from URL path)
  console.log(userId);
  User.findById(userId) //find method will find user by Id
    .then((user) => {
      //if user find by Id
      res.json(user); //retrive data of the user
    })
    .catch((err) => next(err));
});

//update user data by Id /:userId/update
router.put("/:userId/update", (req, res, next) => {
  const { userId } = req.params; //destructuring (will get userId from URL path)
  User.findByIdAndUpdate(userId, req.body, { new: true }) //find user by Id and will update it, (new: true return updated user data)
    .then((user) => {
      res.json(user); //send a json response with updated user
    })
    .catch((err) => next(err));
});



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





// Dislike a movie --------------

router.post("/dislikeMovie", isAuthenticated, async (req, res, next) => {
  const { movieId } = req.body;
  try {
    // Find the user by ID
    const user = await User.findById(req.payload._id);

    // Check if the user already liked the movie
    if (user.likedMovies.includes(movieId)) {
      // Remove the movie ID from the likedMovies array
      user.likedMovies = user.likedMovies.filter((id) => id !== movieId);
      await user.save();
    }

    res.status(200).json({ message: "Movie disliked successfully." });
  } catch (error) {
    next(error);
  }
});






//delete user by Id /:userId/delete
router.post("/:userId/delete", (req, res, next) => {
  const { userId } = req.params; //destructuring (will get userId from URL path)
  User.findByIdAndRemove(userId) //find current user by Id and remove
    .then(() => {
      res.json({ message: "Account deleted" });
    })
    .catch((err) => next(err));
});

//update user image by Id /:userId/updateImage
router.post("/:userId/updateImage", (req, res, next) => {
  const { image } = req.body; //destructuring (will get image from req.body)
  const { userId } = req.params; //destructuring (will get userId from URL path)
  User.findByIdAndUpdate(userId, { image }, { new: true }) //find user by Id and update image, (new: true return updated user data)
    .then((user) => {
      res.json(user); //send a json response with updated image
    })
    .catch((err) => next(err));
});

module.exports = router;

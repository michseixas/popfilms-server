//import express to use router
const express = require("express");
const router = express.Router();

//import the mongoose models to access the database with the methods: (find, update, delete, create, find by id, ....)
const User = require("../models/User.model");

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
router.post("/:userId/update", (req, res, next) => {
  const { userId } = req.params; //destructuring (will get userId from URL path)
  User.findByIdAndUpdate(userId, req.body, { new: true }) //find user by Id and will update it, (new: true return updated user data)
    .then((user) => {
      res.json(user); //send a json response with updated user
    })
    .catch((err) => next(err));
});

//delete user by Id /:userId/delete
router.post("/:userId/delete", (req, res, next) => {
  console.log("deleteeee method");
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

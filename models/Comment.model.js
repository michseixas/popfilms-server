const { Schema, model } = require("mongoose");

//Comment Schema

const commentSchema = new Schema({
  author: {
    type: String,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  movieId: {
    type: String,
  },
  userId: {
    type: String,
  },
});

module.exports = model("Comment", commentSchema);

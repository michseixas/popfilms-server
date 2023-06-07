const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  author: {
    type: String,
    ref: "User",
  },
  comment: {
    type: String,
  },
  movieId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Comment", commentSchema);

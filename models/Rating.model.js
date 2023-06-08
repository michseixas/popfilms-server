const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
  rating: {
    type: String,
  },
  movieId: {
    type: String,
  },
});

module.exports = model("Rating", ratingSchema);

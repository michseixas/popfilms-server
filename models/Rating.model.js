const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
  ratings: [{
    type: Number,
  }],
  movieId: {
    type: String,
  },
});

module.exports = model("Rating", ratingSchema);

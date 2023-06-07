const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const MovieSchema = new Schema(
  items[
    ({
      id: {
        type: String,
      },
      title: {
        type: String,
      },
      year: {
        type: String,
      },
      image: {
        type: String,
      },
      runtimeStr: {
        type: String,
      },
      plot: {
        type: String,
      },
      genres: {
        type: String,
      },
      directors: {
        type: String,
      },
      stars: {
        type: String,
      },
      imDbRating: {
        type: String,
      },
      releaseState: {
        type: String,
      },
      comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }], //since each movie allows more than 1 comment, it should be an array
    },
    {
      timestamps: true,
    })
  ]
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    username: {
      type: String,
      required: [true, "Password is required."],
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    likedMovies: [
      {
        type: String,
      },
    ],
    imageUrl: {
      type: String,
    },
    movieId: {
      type: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    },
    isPremium: {
      type: Boolean, default: false,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

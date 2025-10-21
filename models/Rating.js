const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema(
  {
    username: { type: String },
    rating: { type: String, required: true },
    review: { type: String, required: true },
    // image: { type: String },
    rideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rides",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = ratingSchema

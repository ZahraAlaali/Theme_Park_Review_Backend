const { Schema } = require("mongoose")

const ratingSchema = new Schema(
  {
    username: { type: String },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    image: { type: String },
    // rideId: { type: mongoose.Schema.Types.ObjectId, ref: "Rides" },
  },
  { timestamps: true }
)

module.exports = ratingSchema

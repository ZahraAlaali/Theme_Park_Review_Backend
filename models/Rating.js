const { Schema } = require("mongoose")

const ratingSchema = new Schema(
  {
    username: { type: String },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    image: { type: String },
    game_id: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = ratingSchema

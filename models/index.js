const mongoose = require("mongoose")
const ratingSchema = require("./Rating")

const Rating = mongoose.model("Rating", ratingSchema)

module.exports = {
  Rating,
}

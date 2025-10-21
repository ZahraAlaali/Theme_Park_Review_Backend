const mongoose = require("mongoose")
const ratingSchema = require("./Rating")
const ridesSchema = require("./Rides")

const Rating = mongoose.model("Rating", ratingSchema)
const Rides = mongoose.model("Rides", ridesSchema)

module.exports = {
  Rating,
  Rides,
}

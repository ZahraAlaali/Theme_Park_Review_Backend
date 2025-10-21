const { Rating, Rides } = require("../models")

const getRatings = async (req, res) => {
  try {
    const RideInDatabase = await Rides.findOne({ _id: req.params.rideId })
    if (RideInDatabase) {
      const reviews = await Rating.find({
        rideId: RideInDatabase._id,
      })
      res.send(reviews)
    } else {
      res.status(400).send("no rides found")
    }
  } catch (error) {
    res.status(400).send(`An Error accured, ${error}`)
  }
}

const craeteReview = async (req, res) => {
  try {
    const RideInDatabase = await Rides.findOne({ _id: req.params.rideId })
    if (RideInDatabase) {
      const review = await Rating.create(req.body)
      res.send(review)
    } else {
      res.status(400).send("no ride found")
    }
  } catch (error) {
    res.status(400).send(`An Error accured, ${error}`)
  }
}

const deleteReveiw = async (req, res) => {
  try {
    const review = await Rating.findOne({
      rideId: req.params.rideId,
      _id: req.params.ratingId,
    })
    if (review) {
      await Rating.findByIdAndDelete(review._id)
      res.status(200).send("deleted successfully")
    } else {
      res.status(400).send("no review found")
    }
  } catch (error) {
    res.status(400).send(`An Error accured, ${error}`)
  }
}
module.exports = {
  getRatings,
  craeteReview,
  deleteReveiw,
}

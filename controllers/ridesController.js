const { Rides } = require("../models")

exports.getRides = async (req, res) => {
  try {
    const rides = await Rides.find()
    res.send(rides)
  } catch (error) {
    throw error
  }
}

exports.getRide = async (req, res) => {
  try {
    const ride = await Rides.findById(req.params.rideId)
    res.send(ride)
  } catch (error) {
    throw error
  }
}

exports.postRides = async (req, res) => {
  try {
    const rides = await Rides.findOne({ name: req.body.name })
    if (!rides) {
      const ride = await Rides.create(req.body)
      res.status(200).send(ride)
    } else {
      res.status(400).send("it's an existing ride")
    }
  } catch (error) {
    throw error
  }
}

exports.deleteRides = async (req, res) => {
  const rides = await Rides.findByIdAndDelete(req.params.id)
  res.status(200).send({ msg: "your ride have been deleted" })
}

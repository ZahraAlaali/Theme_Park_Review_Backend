const router = require("express").Router()

const rideCtrl = require("../controllers/ridesCOntroller")

// Routes
router.get("/", rideCtrl.getRides)
router.post("/", rideCtrl.postRides)
router.delete("/:id", rideCtrl.deleteRides)

module.exports = router

const router = require("express").Router()

const ratingCtrl = require("../controllers/ratingController")

// Routes
router.get("/:rideId", ratingCtrl.getRatings)
router.post("/:rideId", ratingCtrl.craeteReview)
router.delete("/:rideId/:ratingId", ratingCtrl.deleteReveiw)

module.exports = router

const router = require("express").Router()

const ratingCtrl = require("../controllers/ratingController")

// Routes
router.get("/", ratingCtrl.getGames)

module.exports = router

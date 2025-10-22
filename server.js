const express = require("express")
const logger = require("morgan")
const cors = require("cors")
require("dotenv").config()

// Require Routers
const RatingRouter = require("./routes/ratingRouter")
const rideRouter = require("./routes/ridesRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Use Routers
app.use("/rating", RatingRouter)
app.use("/rides", rideRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})

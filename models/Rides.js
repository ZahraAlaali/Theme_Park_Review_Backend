const { Schema } = require("mongoose")

const ridesSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
)

module.exports = ridesSchema

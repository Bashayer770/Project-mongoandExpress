const { model, Schema } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: { type: String, require: true },
    genre: { type: String, require: true },
    dateRelease: { type: Number, require: true },
    image: { type: String, require: true },
    ratings: [Number],
  },
  { Timestamps: true }
);

module.exports = model("Movie", MovieSchema);

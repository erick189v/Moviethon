const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    genre: String,
    actor: String,
    director: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Movies", MoviesSchema);

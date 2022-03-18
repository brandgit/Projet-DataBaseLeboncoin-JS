const mongoose = require("mongoose");
let Schema = mongoose.Schema;

locationSchema = new Schema({
  address: String,
  city: String,
  cp: Number,
  country: String,
});

module.exports = mongoose.model("Location", locationSchema);

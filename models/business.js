const mongoose = require("mongoose");
let Schema = mongoose.Schema;

businessSchema = new Schema({
  civility: {
    type: String,
    enum: ["man", "woman", "other"],
  },
  name: String,
  lastName: String,
  society: String,
  siret: Number,
  heading: {
    type: String,
    enum: ["Immovable", "Vehicle", "Vacation", "Use"],
  },
  id_location: {
    type: Schema.Types.ObjectId,
    ref: "location",
  },
});

module.exports = mongoose.model("Business", businessSchema);

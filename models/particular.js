const mongoose = require("mongoose");
let Schema = mongoose.Schema;

particularSchema = new Schema({
  id_location: {
    type: Schema.Types.ObjectId,
    ref: "location",
  },
  userName: String,
});

module.exports = mongoose.model("Particular", particularSchema);

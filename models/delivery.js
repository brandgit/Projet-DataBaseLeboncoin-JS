const mongoose = require("mongoose");
let Schema = mongoose.Schema;

deliverySchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },

  id_location: {
    type: Schema.Types.ObjectId,
    ref: "location",
  },

  name:String,
  LastName: String,
});

module.exports = mongoose.model("Delivery", deliverySchema);
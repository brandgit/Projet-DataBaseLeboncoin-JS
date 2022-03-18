const mongoose = require("mongoose");
let Schema = mongoose.Schema;

messageSchema = new Schema({
  id_announcement: {
    type: Schema.Types.ObjectId,
    ref: "announcement",
  },

  sender: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  message: String,
  date: Date,
  time: Date,
});

module.exports = mongoose.model("Message", messageSchema);

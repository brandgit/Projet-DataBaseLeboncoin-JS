const mongoose = require("mongoose");
let Schema = mongoose.Schema;

userSchema = new Schema({
  id_particular: {
    type: Schema.Types.ObjectId,
    ref: "particular",
  },
  id_business: {
    type: Schema.Types.ObjectId,
    ref: "business",
  },
  email: String,
  password:String,
  phone:Number
});

module.exports = mongoose.model("User", userSchema);
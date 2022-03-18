const mongoose = require("mongoose");
let Schema = mongoose.Schema;

announcementSchema = new Schema({
  id_user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  id_location: {
    type: Schema.Types.ObjectId,
    ref: "location",
  },
  image: String,
  descript: String,
  title: String,
  type: {
    type: String,
    enum: ["offer", "request"],
  },
  category: {
    type: String,
    enum: [
      "Holidays",
      "Employement",
      "Vehicles",
      "Realestate",
      "Fashion",
      "House",
      "Multimedia",
      "Leisure",
      "Animals",
      "Professional",
      "Equipment",
      "Services",
    ],
  },
});

module.exports = mongoose.model("Announcement", announcementSchema);

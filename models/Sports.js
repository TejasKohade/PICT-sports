const mongoose = require("mongoose");

const SportsSchema = new mongoose.Schema(
  {
    sportsname: {
      type: String,
    },

    itemname: {
      type: String,
    },
    userid: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sports", SportsSchema);

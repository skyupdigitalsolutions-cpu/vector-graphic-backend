const mongoose = require("mongoose");

const connectInfoSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    map_url: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const ConnectInfo = mongoose.model("ConnectInfo", connectInfoSchema);

module.exports = ConnectInfo;
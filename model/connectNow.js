const mongoose = require("mongoose");

const connectNowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ConnectNow = mongoose.model("ConnectNow", connectNowSchema);
module.exports = ConnectNow;
const mongoose = require("mongoose");

const contactUsschema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    your_interest: {
      type: [String],
      required: true,
    },      
    phone_number: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: [true, "Message is Required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactUsschema);

module.exports = Contact;

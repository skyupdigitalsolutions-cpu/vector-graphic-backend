const express = require("express")
const router = express.Router();
// const Contact = require("../model/contactUs")
const {  createContact,
    getContact,
    getContacts,
    deleteContact,
    updateContact } = require("../controller/ContactController")

// getting all contacts with this route
router.get("/", getContacts);

// getting single contacts with this route
router.get("/:id" , getContact); 

// creating a contactus with this route
router.post("/" , createContact);

// updating a contact with this route
router.put("/:id", updateContact);

// deleting a contact with this route
router.delete("/:id" , deleteContact);

module.exports = router;

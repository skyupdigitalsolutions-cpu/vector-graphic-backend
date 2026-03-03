const Contact = require("../model/contactUs.js");


const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    // res.status(200).json({ message: error.message });
    res.status(201).json({ message: "Contact created successfully", data: contact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
     return res.status(400).json({ message: "contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, req.body);
    if (!contact) {
      res.status(400).json({ message: "contact not found" });
    }
    const updatedContact = await Contact.findById(id);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createContact,
    getContact,
    getContacts,
    deleteContact,
    updateContact 
} 

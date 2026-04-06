const ConnectNow = require("../model/connectNow.js");

const createConnectNow = async (req, res) => {
  try {
    const data = await ConnectNow.create(req.body);
    res.status(201).json({ message: "Submitted successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getConnectNows = async (req, res) => {
  try {
    const data = await ConnectNow.find({}).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteConnectNow = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ConnectNow.findByIdAndDelete(id);
    if (!data) return res.status(400).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createConnectNow, getConnectNows, deleteConnectNow };
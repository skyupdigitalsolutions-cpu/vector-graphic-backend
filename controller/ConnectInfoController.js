const ConnectInfo = require("../model/connectInfo.js");

const createConnectInfo = async (req, res) => {
  try {
    const info = await ConnectInfo.create(req.body);
    res.status(201).json({ message: "Connect info created successfully", data: info });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getConnectInfos = async (req, res) => {
  try {
    const infos = await ConnectInfo.find({});
    res.status(200).json(infos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getConnectInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await ConnectInfo.findById(id);
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateConnectInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await ConnectInfo.findByIdAndUpdate(id, req.body);
    if (!info) {
      return res.status(400).json({ message: "Connect info not found" });
    }
    const updatedInfo = await ConnectInfo.findById(id);
    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteConnectInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await ConnectInfo.findByIdAndDelete(id);
    if (!info) {
      return res.status(400).json({ message: "Connect info not found" });
    }
    res.status(200).json({ message: "Connect info deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createConnectInfo,
  getConnectInfos,
  getConnectInfo,
  updateConnectInfo,
  deleteConnectInfo,
};
const express = require("express");
const router = express.Router();
const { createConnectInfo, getConnectInfos, getConnectInfo, updateConnectInfo, deleteConnectInfo } = require("../controller/ConnectInfoController");

router.get("/", getConnectInfos);
router.get("/:id", getConnectInfo);
router.post("/", createConnectInfo);
router.put("/:id", updateConnectInfo);
router.delete("/:id", deleteConnectInfo);

module.exports = router;
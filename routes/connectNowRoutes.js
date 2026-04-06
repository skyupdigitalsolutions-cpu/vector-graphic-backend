const express = require("express");
const router = express.Router();
const { createConnectNow, getConnectNows, deleteConnectNow } = require("../controller/ConnectNowController");

router.get("/", getConnectNows);
router.post("/", createConnectNow);
router.delete("/:id", deleteConnectNow);

module.exports = router;
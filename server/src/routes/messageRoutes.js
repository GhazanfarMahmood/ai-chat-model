const express = require("express");

const { getMessages } = require("../controller/messageController");

const router = express.Router();

router.get("/", getMessages);

module.exports = router;
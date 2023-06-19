const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

server.get("/aboutus", aboutController.getabout);
module.exports = router;

const express = require("express");

const contactController = require("../controllers/contactController");

const router = express.Router();

server.post("/", contactController.createContact);
server.get("/contact", contactController.getContact);

module.exports = router;

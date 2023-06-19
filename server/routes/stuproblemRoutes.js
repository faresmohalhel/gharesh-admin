const express = require("express");
const router = express.Router();
const stuprobelmController = require("../controllers/stuprobelmController");
const server = require("../server");

server.post("/addproblem", stuprobelmController.addproblem);
server.get("/getproblem", stuprobelmController.getproblem);
// server.delete("/deleteproblem/:email", stuprobelmController.deleteproblem);
module.exports = router;

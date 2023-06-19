const express = require("express");
const router = express.Router();
const stuprobelmController = require("../controllers/stuprobelmController");
const server = require("../server");

server.post("/addproblem", stuprobelmController.addproblem);
server.get("/getactiveproblem", stuprobelmController.getproblem);
server.get("/getpendingproblem", stuprobelmController.getpendingproblem);

server.put("/activateproblem/:email", stuprobelmController.activateproblem);
// server.delete("/deleteproblem/:email", stuprobelmController.deleteproblem);
module.exports = router;

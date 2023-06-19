const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  about: String,
});

const aboutData = mongoose.model("aboutus", dataSchema); // Create the Data model

module.exports = aboutData; // Export the Data mod

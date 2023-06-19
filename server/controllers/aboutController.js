const contactData = require("../model/about");

const getabout = async (req, res) => {
  try {
    // Retrieve all problems from the database
    const about = await contactData.find();
    res.status(200).json(about);
    console.log(about);
  } catch (error) {
    console.error("An error occurred while retrieving about", error);
    res.status(500).json({ error: "An error occurred while retrieving about" });
  }
};
module.exports.getabout = getabout;

const editabout = async (req, res) => {
  try {
    const { id } = req.params._id;
    const about = await contactData.findByIdAndUpdate(id, req.body);
    res.status(200).json(about);
  } catch (error) {
    console.error("An error occurred while retrieving about", error);
    res.status(500).json({ error: "An error occurred while retrieving about" });
  }
};

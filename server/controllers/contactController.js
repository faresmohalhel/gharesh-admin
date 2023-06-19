const Contact = require("../model/contactus");

const getContact = async (req, res) => {
  const contact = new Contact();
  console.log("made it into controller");

  try {
    const response = await Contact.find();
    console.log("event done event sending");
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};
module.exports.getContact = getContact;

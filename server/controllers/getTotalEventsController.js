const { Event } = require("../model/eventSchema");

const getTotalEventsController = async (req, res) => {
  const event = new Event();
  console.log("made it into controller");
  try {
    const response = await Event.find({});
    console.log("event done sending");
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports.getTotalEventsController = getTotalEventsController;

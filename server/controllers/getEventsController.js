const { Event } = require("../model/Stuproblem");

const getEventsController = async (req, res) => {
  const event = new Event();
  console.log("made it into controller");

  try {
    const response = await Event.find({ active: false });
    console.log("event done event sending");
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports.getEventsController = getEventsController;

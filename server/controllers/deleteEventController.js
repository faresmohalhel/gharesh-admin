const { Problem } = require("../model/Stuproblem");

const deleteEventController = async (req, res) => {
  const problem = new Problem();
  console.log("made it into delete controller");
  try {
    const response = await Problem.findOneAndDelete({
      email: req.params.email,
    });
    console.log("done finding");
    res.json(response);
  } catch (error) {
    console.log("get events error");
    console.log(error);
  }
};

module.exports.deleteEventController = deleteEventController;

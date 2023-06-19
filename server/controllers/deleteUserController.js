const { User } = require("../model/userSchema");

const deleteUserController = async (req, res) => {
  const user = new User();
  console.log("made it into controller");
  try {
    const response = await User.findOneAndDelete({ email: req.params.email });
    console.log("done finding");
    res.json(response);
  } catch (error) {
    console.log("get users error");
    console.log(error);
  }
};

module.exports.deleteUserController = deleteUserController;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "a users email is required"],
    unique: [true, "a users email must be unique"],
  },
  password: {
    type: String,
    required: [true, "a users password is required"],
  },
  phoneNumber: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
  },
  volunteering: [{ eventName: String }],
  payment: [{ date: String, amount: Number, eventName: String }],
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    gpa: {
      type: Number,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    problemDescription: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    raised: {
      type: Number,
    },
    images: {
      type: [Buffer],
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);
// const Problem2 = mongoose.model("Problem2", problemSchema);

// module.exports.Problem2 = Problem2;
module.exports = Problem;

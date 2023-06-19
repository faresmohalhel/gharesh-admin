const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
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
    amount: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
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

const Event = mongoose.model("Event", eventSchema);

module.exports.Event = Event;

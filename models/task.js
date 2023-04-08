const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  //   FullName: {
  //     type: String,
  //     required: [true, "must provide name"],
  //     trim: true,
  //     maxlength: [20, "Fullname can not be more than 20 characters"],
  //     minlength: [6, "Fullname can not be less than 6 characters"],
  //   },
  //   Age: {
  //     type: Number,
  //     required: [true, "must provide age"],
  //     trim: true,
  //     maxlength: [3, "provide valid age"],
  //     minlength: [1, "provide valid age"],
  //   },
  //   City: {
  //     type: String,
  //     required: [true, "must provide city"],
  //     trim: true,
  //     maxlength: [15, "city can not be more than 15 character"],
  //     minlength: [3, "provide valid City name"],
  //   },
  //   Complete: {
  //     type: Boolean,
  //     default: false,
  //   },
  Name: String,
  complete: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);

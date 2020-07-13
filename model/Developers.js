const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DevelopersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Q1: {
    type: String,
    required: true,
  },
  Q2: {
    type: String,
    required: true,
  },
  Q3: {
    type: String,
    required: true,
  },
});

module.exports = Developers = mongoose.model("developers", DevelopersSchema);

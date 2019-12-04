const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BeatsSchema = new Schema({
  name: { type: String, required: true },
  beat: { type: String, required: true },
  length: { type: Number, required: true }
});

module.exports = BeatsSchema;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BeatsSchema = new Schema({
  name: { type: String, required: true },
  scent: { type: String, required: true },
  height: { type: Number, required: true }
});

module.exports = BeatsSchema;
const mongoose = require("mongoose");

const BeatsSchema = require("./schema/beats");

const Beats = mongoose.model("beats", BeatsSchema);

module.exports = Beats;
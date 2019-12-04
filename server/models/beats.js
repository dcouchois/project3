const mongoose = require("mongoose");

const BeatsSchema = require("./schema/beats");

const Beats = mongoose.model("Beats", BeatsSchema);

module.exports = Beats;
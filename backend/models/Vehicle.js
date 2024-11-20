const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vehicleNumber: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  location: { type: String },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);

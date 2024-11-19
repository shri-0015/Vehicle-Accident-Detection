const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Register Vehicle
router.post("/register", async (req, res) => {
  try {
    const { owner, vehicleNumber, model, emergencyContact, location } = req.body;
    const newVehicle = new Vehicle({ owner, vehicleNumber, model, emergencyContact, location });
    await newVehicle.save();
    res.status(201).send("Vehicle registered");
  } catch (err) {
    res.status(400).send("Error registering vehicle");
  }
});

// Get Vehicles
router.get("/:ownerId", async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ owner: req.params.ownerId });
    res.json(vehicles);
  } catch (err) {
    res.status(500).send("Error fetching vehicles");
  }
});

module.exports = router;

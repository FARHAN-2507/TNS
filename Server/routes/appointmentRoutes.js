const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();
const moment = require("moment"); // Optional: If you want to format dates
const Service = require("../models/Service"); // Assuming this is the service model

// Add Appointment
router.post("/add", async (req, res) => {
  try {
    const { customerName, contactNumber, service, appointmentDate, appointmentTime } = req.body;
    
    // Validate the presence of all required fields
    if (!customerName || !contactNumber || !service || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const appointment = new Appointment({
      customerName,
      contactNumber,
      service,
      appointmentDate,
      appointmentTime,
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully." });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Fetch today's appointments
router.get("/today", async (req, res) => {
  try {
    const today = moment().format("YYYY-MM-DD");
    const appointments = await Appointment.find({
      appointmentDate: today,
    })
    .populate("service", "name")
    .select("customerName contactNumber appointmentTime service appointmentDate status");

    if (appointments.length === 0) {
      console.log("No appointments found for today");
    }

    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});


module.exports = router;

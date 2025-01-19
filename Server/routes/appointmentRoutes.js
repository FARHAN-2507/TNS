const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Ensure this matches your schema

// Create a new appointment
router.post('/', async (req, res) => {
  const { customer_name, customer_contact, service, date, time, userId } = req.body; // Include userId if logged-in users are booking
  try {
    const newAppointment = new Appointment({ 
      customer_name, 
      customer_contact, 
      service, 
      date, 
      time, 
      userId // Save userId for user-specific appointments
    });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get today's appointments
router.get('/today', async (req, res) => {
  const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
  try {
    const appointments = await Appointment.find({ date: today }).populate('userId').populate('service'); 
    // Replace 'userId' and 'service' with your actual populated fields if models are referenced
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

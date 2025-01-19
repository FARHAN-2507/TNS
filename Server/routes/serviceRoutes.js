const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/', async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const newService = new Service({ title, description, price });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

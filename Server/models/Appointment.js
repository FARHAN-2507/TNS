const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to User
  date: { type: Date, required: true },
  service: { type: String, required: true },
  status: { type: String, default: 'pending' },  // pending, completed, canceled
});

module.exports = mongoose.model('Appointment', appointmentSchema);

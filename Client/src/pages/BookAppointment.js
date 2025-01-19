import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookAppointment() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [userId, setUserId] = useState(''); // Fetch this from logged-in user data

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    };

    fetchServices();
  }, []);

  const handleAppointmentBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/appointments', {
        serviceId: selectedService,
        date: appointmentDate,
        userId, // Use user ID from the logged-in session
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Book Appointment</h2>
      <form onSubmit={handleAppointmentBooking}>
        <div className="mb-3">
          <label>Select Service</label>
          <select
            className="form-control"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">-- Select Service --</option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Appointment Date</label>
          <input
            type="date"
            className="form-control"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;

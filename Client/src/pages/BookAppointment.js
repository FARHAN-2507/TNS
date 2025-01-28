import React, { useState, useEffect } from "react";
import axios from "axios";

function BookAppointment() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get("http://localhost:5000/api/services");
      setServices(response.data);
    };

    fetchServices();
  }, []);

  const handleAppointmentBooking = async (e) => {
    e.preventDefault();

    // Ensure all required fields are provided
    if (!customerName || !contactNumber || !selectedService || !appointmentDate || !appointmentTime) {
      alert("Please fill all fields.");
      return;
    }

    try {
      // Log the data being sent for debugging
    console.log({
      customerName,
      contactNumber,
      service: selectedService,
      appointmentDate,
      appointmentTime,
    });
      // Send the data to the backend API
      const response = await axios.post("http://localhost:5000/api/appointments/add", {
        customerName,
        contactNumber,
        service: selectedService,
        appointmentDate,
        appointmentTime,
      });
      alert("We will call you later to confirm the appointment.");
    } catch (error) {
      console.error("Error booking appointment:", error.response ? error.response.data : error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Book Appointment</h2>
      <form onSubmit={handleAppointmentBooking}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contact Number</label>
          <input
            type="text"
            className="form-control"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-3">
          <label>Appointment Time</label>
          <input
            type="time"
            className="form-control"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
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

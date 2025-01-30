import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/BookAppointment.css";

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
    if (!customerName || !contactNumber || !selectedService || !appointmentDate || !appointmentTime) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/appointments/add", {
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
    <div className="booking-container">
      <div style={{ marginTop: '90px' }}></div>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Book Your Beauty Session</h1>
          <p>Your Perfect Look Awaits</p>
        </div>
      </div>

      <div className="container form-wrapper">
        <div className="booking-card">
          <h2 className="form-title">Appointment Details</h2>
          <form onSubmit={handleAppointmentBooking}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="text" className="form-control" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Select Service</label>
              <select className="form-select" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                <option value="">-- Select Service --</option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" className="form-control" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" className="form-control" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
                </div>
              </div>
            </div>

            <button type="submit" className="btn submit-btn">Confirm Booking</button>
          </form>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>Locate Us</h4>
              <p><strong>Address:</strong> B3/63 Ground Floor Sector - 6 Rohini , New Delhi 110085</p>
              <p><strong>Phone:</strong> +91 8447600553</p>
              <p><strong>Email:</strong> farhanakthar99@gmail.com</p>
            </div>
            <div className="col-md-6">
              <h4>Find Us on Google Maps</h4>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.214359806919!2d77.10888037565581!3d28.71313917562088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c04d66e151%3A0x758b1999fbc1bfe8!2sTouch%20N%20Shine%20beauty%20parlour!5e0!3m2!1sen!2sin!4v1738246461012!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;

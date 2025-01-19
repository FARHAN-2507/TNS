import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get('http://localhost:5000/api/appointments/today');
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <h3>Today's Appointments</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Service</th>
            <th>User</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.serviceName}</td>
              <td>{appointment.userName}</td>
              <td>{appointment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;

import React from "react";

const AppointmentsCard = ({ appointments, markAppointmentAsDone }) => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h4>Today's Appointments</h4>
      </div>
      <div className="card-body">
        {appointments.length > 0 ? (
          <ul className="list-group">
            {appointments.map((appointment) => (
              <li key={appointment._id} className="list-group-item">
                <strong>{appointment.customerName}</strong><br />
                Time: {appointment.appointmentTime}<br />
                Contact: {appointment.contactNumber}<br />
                Service: {appointment.service?.name || "N/A"}<br />
                Status: {appointment.status || "pending"}
                <button
                  className="btn btn-sm btn-success mt-2"
                  onClick={() => markAppointmentAsDone(appointment._id)}
                  disabled={appointment.status === "completed"}
                >
                  {appointment.status === "completed" ? "Done" : "Mark as Done"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments for today.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentsCard;

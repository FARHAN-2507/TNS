import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Today's Appointments",
      description: "View, add, delete, or fetch appointments for a specific date.",
      color: "primary",
      path: "/appointments",
    },
    {
      title: "Manage Staff Attendance",
      description: "View, add, delete, or fetch staff attendance records.",
      color: "secondary",
      path: "/staffattendancecard",
    },
    {
      title: "Manage Services",
      description: "Add, update, or delete services offered.",
      color: "success",
      path: "/services",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <div className="row">
        {sections.map((section, index) => (
          <div key={index} className="col-md-4">
            <div
              className={`card bg-${section.color} text-white`}
              onClick={() => navigate(section.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <p className="card-text">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

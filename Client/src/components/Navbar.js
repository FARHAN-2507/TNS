import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png'; // Adjust the path if necessary
import './Navbar.css'; // Custom CSS for styling
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo1} alt="Salon Logo" className="navbar-logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-appointment">
                Book Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <Button variant="outline-danger">Admin</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

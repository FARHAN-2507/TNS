import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are a premium salon offering world-class services to enhance
              your style and confidence. Your satisfaction is our priority!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>~
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +1 (123) 456-7890
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> info@salon.com
            </p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> 123 Main Street,
              Cityville, USA
            </p>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Footer Bottom Section */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Salon Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

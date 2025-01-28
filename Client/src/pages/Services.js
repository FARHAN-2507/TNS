import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate in place of useHistory
import '../pages/styles/Services.css';
import Sb1 from '../assets/Sb1.png';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState(['Hair', 'Skin', 'Nails', 'Makeup', 'Facial']); // Add categories here
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to "All"
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  useEffect(() => {
    fetchServices(selectedCategory);
  }, [selectedCategory]);

  const fetchServices = async (category) => {
    try {
      const response = await axios.get('http://localhost:5000/api/services', {
        params: { category: category !== 'All' ? category : undefined },
      });
      setServices(response.data);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to load services. Please try again later.');
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBookNowClick = () => {
    // Redirect to the Book Appointment page and pass the serviceId as a URL parameter
    navigate(`/book-appointment`);
  };

  return (
    
    
    <div>
      <div style={{ marginTop: '70px' }}></div>
      {/* Banner */}
      <div className="banner mb-4">
        <img
          src={Sb1} // Replace with actual banner image URL
          className="img-fluid w-100"
          alt="Salon Banner"
        />
      </div>

      <div className="container">
        <h1 className="text-center mb-4">Our Services</h1>
        {error && <p className="text-danger mb-4 text-center">{error}</p>}

        {/* Category Filter Buttons */}
        <div className="d-flex justify-content-center mb-5">
          {['All', ...categories].map((category) => (
            <button
              key={category}
              className={`btn mx-2 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <div className="row g-4">
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service._id} className="col-md-6 col-lg-4">
                <div className="card shadow-sm">
                  {/* Display the image */}
                  <img
                    src={`http://localhost:5000${service.image}`}
                    className="card-img-top"
                    alt={service.name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <p className="card-text fw-bold">Price: ₹{service.price}</p>
                    <p className="card-text">Estimated Time: {service.time} mins</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleBookNowClick(service._id)} // Redirect to Book Appointment page
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No services available for this category.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;

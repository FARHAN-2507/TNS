import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/Services.css';
import Sb1 from '../assets/Sb1.png';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { FaRupeeSign } from "react-icons/fa";
import Footer from "../components/Footer";


const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [categories] = useState(['Hair', 'Skin', 'Nails', 'Makeup', 'Facial']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleBookNowClick = (serviceId) => {
    navigate(`/book-appointment/${serviceId}`);
  };

  return (
    <div className="services-page">
      <div style={{ marginTop: '90px' }}></div>

      {/* Hero Section */}
      <div className="hero-banner position-relative mb-5">
        <img src={Sb1} className="img-fluid w-100" alt="Salon Banner" />
        <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold mb-3">Transform Your Beauty</h1>
          <p className="lead mb-4">Experience luxury with our premium services</p>
          <button 
            className="btn btn-light btn-lg rounded-pill px-4"
            onClick={() => navigate('/book-appointment')}
          >
            Book Consultation <FiArrowRight className="ms-2" />
          </button>
        </div>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter mb-5">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                className={`btn rounded-pill px-4 py-2 ${
                  selectedCategory === category 
                    ? 'btn-primary' 
                    : 'btn-outline-primary'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {error && <p className="text-danger text-center mb-5">{error}</p>}
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service._id} className="col">
                <div className="service-card card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="card-img-top position-relative overflow-hidden">
                    <img
                      src={`http://localhost:5000${service.image}`}
                      className="img-fluid service-image"
                      alt={service.name}
                    />
                    <div className="category-badge position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary rounded-pill">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body p-4">
                    <h3 className="card-title fw-bold mb-3">{service.name}</h3>
                    <p className="card-text text-muted mb-4">{service.description}</p>
                    
                    <div className="service-meta d-flex justify-content-between align-items-center mb-4">
                      <div className="price">
                        <FaRupeeSign className="me-1" />
                        <span className="h5 fw-bold">{service.price}</span>
                      </div>
                      <div className="time">
                        <FiClock className="me-1" />
                        <span>{service.time} mins</span>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                      onClick={() => navigate('/book-appointment')}
                    >
                      Book Now
                      <FiArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No services available in this category</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    };

    fetchServices();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Our Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4" key={service._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text">Price: ${service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

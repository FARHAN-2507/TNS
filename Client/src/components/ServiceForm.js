import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceForm = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    time: '',
    price: '',
  });
  const [image, setImage] = useState(null); // For storing the selected image file

  // Fetch services when the component mounts
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data); // Store the fetched services in state
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices(); // Fetch services on mount
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle both text and file inputs
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('time', formData.time);
    data.append('price', formData.price);
    data.append('image', formData.image)
    try {
      const response = await axios.post('http://localhost:5000/api/services/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Service added successfully');
      setFormData({
        name: '',
        description: '',
        category: '',
        time: '',
        price: '',
        image: null,
      });
      fetchServices(); // Refresh the services list after adding
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service');
    }
  };

  // Handle image input
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Save the file object
  };

  // Filter services based on selected category
  const filteredServices = services.filter(
    (service) => !selectedCategory || service.category === selectedCategory
  );

  return (
    <div className="container mt-4">
      <h2>Manage Services</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          >
            <option value="">Select a category</option>
            <option value="Hair">Hair</option>
            <option value="Nails">Nails</option>
            <option value="Makeup">Makeup</option>
            <option value="Facial">Facial</option>
            <option value="Skin">Skin</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Time (in minutes)</label>
          <input
            type="number"
            className="form-control"
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (in Rs)</label>
          <input
            type="number"
            className="form-control"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;

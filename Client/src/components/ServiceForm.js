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

  // ✅ Image Upload State
  const [image, setImage] = useState(null);

  // ✅ Fetch Services
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('time', formData.time);
    data.append('price', formData.price);
    data.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/services/add', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Service added successfully');
      setFormData({ name: '', description: '', category: '', time: '', price: '' });
      setImage(null);
      fetchServices();
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service');
    }
  };

  return (
    <div className="container mt-4">
             <div style={{ marginTop: '90px' }}></div>

      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">Manage Services</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Service Name */}
            <div className="mb-3">
              <label className="form-label fw-bold">Service Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter service name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label fw-bold">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter service description"
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              ></textarea>
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label fw-bold">Category</label>
              <select
                className="form-select"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Select a category</option>
                <option value="Hair">Hair</option>
                <option value="Packages">Packages</option>
                <option value="Makeup">Makeup</option>
                <option value="Facial">Facial</option>
                <option value="Skin">Skin</option>
              </select>
            </div>

            {/* Time */}
            <div className="mb-3">
              <label className="form-label fw-bold">Time (in minutes)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Duration in minutes"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>

            {/* Price */}
            <div className="mb-3">
              <label className="form-label fw-bold">Price (Rs)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label className="form-label fw-bold">Upload Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success w-100">
              <i className="bi bi-plus-circle"></i> Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;


import React, { useState } from 'react';
// import './loginpage.css';
// Ai use handeko mailai
export default function RegisterApp() {
  const [formData, setFormData] = useState({
    Username: '',
    Name: '',
    Password: '',
    Kuid: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Backend URl Mero computer ko
  const API_URL = 'http://localhost:8000/api/v1/users/register';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate empty fields backend me ne xha
    if (!formData.Username.trim() || !formData.Name.trim() || 
        !formData.Password.trim() || !formData.Kuid.trim()) {
      setMessage({ text: 'All fields are required!', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: data.message || 'User registered successfully!', type: 'success' });
        setFormData({ Username: '', Name: '', Password: '', Kuid: '' });
      } else {
        setMessage({ text: data.message || 'Registration failed!', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Network error! Please check your connection.', type: 'error' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Create Account</h1>

        <div className="form-wrapper">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              placeholder="Enter username"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Enter password"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">User ID (Kuid)</label>
            <input
              type="text"
              name="Kuid"
              value={formData.Kuid}
              onChange={handleChange}
              placeholder="Enter user ID"
              className="form-input"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`submit-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <span className="button-content">
                <span className="spinner"></span>
                Processing...
              </span>
            ) : (
              'Register'
            )}
          </button>
        </div>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
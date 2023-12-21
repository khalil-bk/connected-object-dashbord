// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'; // Import the desired icon

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your backend for login process

    // Redirect to the Dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div style={{ fontFamily: 'Roboto', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '40px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>Login</h2>
        <form id="login-form" onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', fontWeight: 'bold', color: '#555555' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              border: '1px solid #cccccc',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />

          <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', color: '#555555' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              border: '1px solid #cccccc',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />

          <button type="submit" style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            transition: 'background-color 0.3s ease',
          }}>
            <FaSignInAlt style={{ marginRight: '5px' }} /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

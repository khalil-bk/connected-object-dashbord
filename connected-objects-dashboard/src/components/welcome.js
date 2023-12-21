// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust the height as needed
  };

  const welcomeContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '40px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    width: '400px', /* Adjust the width as needed */
    textAlign: 'center',
  };

  const h2Style = {
    color: '#333333',
    marginBottom: '20px',
  };

  const actionIconsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: '36px',
    color: '#3498db',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  };

  const iconLabelStyle = {
    color: '#555555',
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeContainerStyle}>
        <h2 style={h2Style}>Welcome!</h2>
        <div style={actionIconsStyle}>
          <Link to="/signup">
            <i className="fas fa-user-plus" style={iconStyle} id="signup-icon"></i>
          </Link>
          <span style={iconLabelStyle} className="icon-label">Sign Up</span>
          <Link to="/login">
            <i className="fas fa-sign-in-alt" style={iconStyle} id="login-icon"></i>
          </Link>
          <span style={iconLabelStyle} className="icon-label">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

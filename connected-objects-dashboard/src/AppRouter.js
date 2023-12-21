// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome';
import SignUp from './components/signUp';
import Login from './components/login';
import Dashboard from './components/dashboard'; // Import the Dashboard component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

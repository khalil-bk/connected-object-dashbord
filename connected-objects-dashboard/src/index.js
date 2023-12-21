import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import './index.css';
import axios from 'axios';

// Fetch data when the application starts
const fetchData = async () => {
  try {
    const response = await axios.get('/api/objects'); // Adjust the URL based on your backend routes
    console.log(response.data); // Log the data to the console (you can update the UI here)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData(); // Call the fetchData function when the application starts

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// Dashboard.js

import React, { useState } from 'react';
import AddObjectForm from './AddObjectForm'; // Adjust the path accordingly

const Dashboard = () => {
  const [connectedObjects, setConnectedObjects] = useState([
    {
      serialNumber: 'OBJ001',
      name: 'Smart Thermostat',
      sensorType: 'Temperature',
      userAssociation: 'Fedi Hmida',
    },
    {
      serialNumber: 'OBJ002',
      name: 'Motion Sensor',
      sensorType: 'Movement',
      userAssociation: 'John Doe',
    },
  ]);

  const [selectedObject, setSelectedObject] = useState(null);

  const handleAddObject = (newObject) => {
    setConnectedObjects((prevObjects) => [...prevObjects, newObject]);
    setSelectedObject(null); // Clear selected object after adding
  };

  const handleModifyObject = (object) => {
    setSelectedObject(object);
  };

  const handleUpdateObject = (updatedObject) => {
    setConnectedObjects((prevObjects) =>
      prevObjects.map((obj) =>
        obj === selectedObject ? { ...obj, ...updatedObject } : obj
      )
    );
    setSelectedObject(null); // Clear selected object after update
  };

  return (
    <div className="container mt-5">
      <header className="bg-dark text-white p-4 text-center">
        <h1 className="display-4">Connected Objects Dashboard</h1>
      </header>

      <section className="mb-4">
        <h2 className="mb-3">Connected Objects</h2>
        <ul className="list-group">
          {connectedObjects.map((object, index) => (
            <li className="list-group-item" key={index}>
              <strong>Serial Number:</strong> {object.serialNumber}<br />
              <strong>Name:</strong> {object.name}<br />
              <strong>Sensor Type:</strong> {object.sensorType}<br />
              <strong>User Association:</strong> {object.userAssociation}<br />

              {/* Add "Modify" button */}
              <button
                className="btn btn-warning btn-sm mt-2"
                onClick={() => handleModifyObject(object)}
              >
                Modify
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3">Add New Object</h2>
        <AddObjectForm
          onAddObject={handleAddObject}
          initialObject={selectedObject} // Pass the selected object for modification
          onUpdateObject={handleUpdateObject} // Pass the update function to the form
        />
      </section>
    </div>
  );
};

export default Dashboard;

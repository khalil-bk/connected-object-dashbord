// AddObjectForm.js

import React, { useState, useEffect } from 'react';

const AddObjectForm = ({ onAddObject, onUpdateObject, initialObject }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const [sensorType, setSensorType] = useState('temperature');
  const [userAssociation, setUserAssociation] = useState('');

  useEffect(() => {
    // Populate form fields with initial object values when modifying
    if (initialObject) {
      setSerialNumber(initialObject.serialNumber || '');
      setName(initialObject.name || '');
      setSensorType(initialObject.sensorType || 'temperature');
      setUserAssociation(initialObject.userAssociation || '');
    }
  }, [initialObject]);

  const handleSerialNumberChange = (e) => setSerialNumber(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleSensorTypeChange = (e) => setSensorType(e.target.value);
  const handleUserAssociationChange = (e) => setUserAssociation(e.target.value);

  const handleAddObject = (e) => {
    e.preventDefault();

    if (!serialNumber || !name || !sensorType || !userAssociation) {
      alert('All fields are required.');
      return;
    }

    const newObject = {
      serialNumber,
      name,
      sensorType,
      userAssociation,
    };

    if (initialObject) {
      onUpdateObject(newObject);
    } else {
      onAddObject(newObject);
    }

    // Clear the form fields after adding or updating the object
    setSerialNumber('');
    setName('');
    setSensorType('temperature');
    setUserAssociation('');
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="serial-number">Serial Number</label>
          <input
            type="text"
            className="form-control"
            id="serial-number"
            name="serial-number"
            value={serialNumber}
            onChange={handleSerialNumberChange}
            placeholder="Serial Number"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="object-name">Object Name</label>
          <input
            type="text"
            className="form-control"
            id="object-name"
            name="object-name"
            value={name}
            onChange={handleNameChange}
            placeholder="Object Name"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="sensor-type">Sensor Type</label>
          <select
            className="form-control"
            id="sensor-type"
            name="sensor-type"
            value={sensorType}
            onChange={handleSensorTypeChange}
            required
          >
            <option value="temperature">Temperature</option>
            <option value="movement">Movement</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="user-association">User Association</label>
          <input
            type="text"
            className="form-control"
            id="user-association"
            name="user-association"
            value={userAssociation}
            onChange={handleUserAssociationChange}
            placeholder="User Association"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-dark" onClick={handleAddObject}>
        {initialObject ? 'Update Object' : 'Add Object'}
      </button>
    </form>
  );
};

export default AddObjectForm;

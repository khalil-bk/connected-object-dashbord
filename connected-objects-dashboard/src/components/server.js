const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Sample object data
let objects = [
  { id: 1, serialNumber: 'OBJ001', name: 'Smart Thermostat', sensorType: 'Temperature' },
  { id: 2, serialNumber: 'OBJ002', name: 'Motion Sensor', sensorType: 'Movement' },
];

// GET endpoint to retrieve all objects
app.get('/api/objects', (req, res) => {
  res.json(objects);
});

// POST endpoint to add a new object
app.post('/api/objects', (req, res) => {
  const newObject = req.body;
  newObject.id = objects.length + 1;
  objects.push(newObject);
  res.json(newObject);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

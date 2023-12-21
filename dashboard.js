// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-object-form');
    const objectsList = document.getElementById('objects-list');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      // Get form values
      const serialNumber = document.getElementById('serial-number').value;
      const objectName = document.getElementById('object-name').value;
      const sensorType = document.getElementById('sensor-type').value;
      const userAssociation = document.getElementById('user-association').value;
  
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <strong>Serial Number:</strong> ${serialNumber}<br>
        <strong>Name:</strong> ${objectName}<br>
        <strong>Sensor Type:</strong> ${sensorType}<br>
        <strong>User Association:</strong> ${userAssociation}
      `;
  
      // Add the new item to the list
      objectsList.appendChild(listItem);
  
      // Clear the form
      form.reset();
  
      // Send a POST request to add the new object
      try {
        const response = await fetch('/api/addObject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            serialNumber,
            objectName,
            sensorType,
            userAssociation,
          }),
        });
  
        if (!response.ok) {
          console.error('Error adding object:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding object:', error);
      }
    });
  
    // Example using Fetch API to get the list of objects
    async function fetchObjectList() {
      try {
        const response = await fetch('/api/getObjects');
        if (response.ok) {
          const objects = await response.json();
          updateObjectList(objects);
        } else {
          console.error('Error fetching object list');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    function updateObjectList(objects) {
      const objectListElement = document.getElementById('object-list');
      objectListElement.innerHTML = ''; // Clear existing list
  
      if (objects.length === 0) {
        objectListElement.innerHTML = '<p>No connected objects found.</p>';
        return;
      }
  
      const ul = document.createElement('ul');
      objects.forEach(object => {
        const li = document.createElement('li');
        li.textContent = `${object.serialNumber} - ${object.name} (Sensor: ${object.sensorType})`;
        ul.appendChild(li);
      });
  
      objectListElement.appendChild(ul);
    }
  
    // Fetch and update the object list when the page loads
    document.addEventListener('DOMContentLoaded', fetchObjectList);
  });
  
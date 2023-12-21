// Replace "login-script.js" with your chosen name

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            // Authentication successful, redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Handle authentication error
            console.error('Authentication failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

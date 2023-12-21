document.getElementById('login-form').addEventListener('submit', function (event) {
    // Simulate a successful login for demonstration purposes
    // Replace this with your actual login logic, e.g., validating user credentials
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication logic (replace this with your actual authentication logic)
    var isAuthenticated = authenticateUser(username, password);

    if (isAuthenticated) {
        // Redirect to the dashboard page after a successful login
        window.location.href = 'index.html';
    } else {
        // Handle unsuccessful login (show an error message, etc.)
        alert('Invalid username or password. Please try again.');
    }

    // Prevent the form from submitting the traditional way
    event.preventDefault();
});

// Function to simulate authentication (replace this with your actual authentication logic)
function authenticateUser(username, password) {
    // Add your authentication logic here
    // For demonstration purposes, we'll consider the login successful if the username and password are not empty
    return username.trim() !== '' && password.trim() !== '';
}
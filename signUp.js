document.getElementById('signup-form').addEventListener('submit', function (event) {
    // Simulate a successful signup for demonstration purposes
    // Replace this with your actual signup logic, e.g., creating a new user account
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform signup logic (replace this with your actual signup logic)
    var isSignupSuccessful = signupUser(username, email, password);

    if (isSignupSuccessful) {
        // Redirect to the dashboard page after a successful signup
        window.location.href = 'index.html';
    } else {
        // Handle unsuccessful signup (show an error message, etc.)
        alert('Signup failed. Please try again.');
    }

    // Prevent the form from submitting the traditional way
    event.preventDefault();
});

// Function to simulate signup (replace this with your actual signup logic)
function signupUser(username, email, password) {
    // Add your signup logic here
    // For demonstration purposes, we'll consider the signup successful if the username, email, and password are not empty
    return username.trim() !== '' && email.trim() !== '' && password.trim() !== '';
}
document.getElementById('login-submit').addEventListener('click', function () {
    // Get email and password
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // Check for valid email and password
    if (userEmail === 'jibon@ibank.com' && userPassword === 'jibon') {
        // Show success message and redirect
        document.getElementById('login-error').innerText = '';
        showSuccessMessage('Login successful! Redirecting to the banking page...');
        setTimeout(function () {
            window.location.href = 'banking.html';
        }, 2000);
    } else {
        // Show error message
        document.getElementById('login-error').innerText = 'Invalid email or password. Please try again.';
    }
});

// Function to show success message
function showSuccessMessage(message) {
    const successMessage = document.createElement('p');
    successMessage.innerText = message;
    successMessage.classList.add('success-message');
    document.body.appendChild(successMessage);
    setTimeout(function () {
        successMessage.remove();
    }, 3000);
}

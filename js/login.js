document.getElementById('login-submit').addEventListener('click', function () {
    // Get email and password
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail === 'jibon@ibank.com' && userPassword === 'jibon') {
        window.location.href = 'banking.html';
    }
});

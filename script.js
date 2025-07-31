// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission for validation
    event.preventDefault();
    
    // Get form data
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value.trim();
    const agree = document.getElementById('agree').checked;

    // Validate form fields
    if (!fullName || !email || !experience || !agree) {
        alert("Please fill in all required fields and agree to the terms.");
        return;
    }

    // Additional Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If validation is successful, display a success message or send form data
    alert("Registration successful! We will contact you soon.");
    // You can replace the alert with an actual form submission code or an AJAX request.
    this.submit(); // This will submit the form.
});

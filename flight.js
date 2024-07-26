
function toggleDetails(button) {
    var details = button.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        button.textContent = "View Details";
    }
}
function showBookingForm() {
    document.getElementById('booking-section').classList.toggle('hidden');
}

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'flight project' directory
app.use(express.static(path.join(__dirname, 'flight project')));

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

function registerUser() {
    // Add your form validation and registration logic here.
    // For now, it just redirects to the home page.
    window.location.href = 'Home.html';
    return false; // Prevent form submission
}
function sendEmail() {
    var fromEmail = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.your-email-provider.com",
        Username: "prajju8861@gmail.com",
        Password: "your-email-password",
        To: 'recipient@example.com',
        From: fromEmail,
        Subject: subject,
        Body: message
    }).then(
      function(response) {
          if (response == 'OK') {
              alert('Email sent successfully!');
          } else {
              alert('Error: ' + response);
          }
      }
    );
}   


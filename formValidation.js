// formValidation.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for validation

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    // Check if email is valid (simple validation)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is valid, submit the form (simulate form submission for now)
    alert("Form submitted successfully!");
});

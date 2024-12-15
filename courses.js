// courses.js
document.querySelectorAll('.course-details-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.classList.toggle('show');  // Show or hide the details section
    });
});

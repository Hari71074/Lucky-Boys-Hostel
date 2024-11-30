// Get the "Register Now" button and the registration section
const registerButton = document.getElementById("registerButton");
const registrationSection = document.getElementById("registration");

// Add click event listener to the "Register Now" button
registerButton.addEventListener("click", () => {
    // Hide the parallax container content
    document.querySelector(".parallax-content").style.display = "none";
    
    // Show the registration section
    registrationSection.style.display = "block";
    
    // Smooth scroll to the registration section
    window.scrollTo({
        top: registrationSection.offsetTop,
        behavior: "smooth"
    });
});

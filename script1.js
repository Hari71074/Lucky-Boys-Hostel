// Get references to the HTML elements
const registerButton = document.getElementById('registerButton');
const daywiseButton = document.getElementById('daywiseButton');
const monthlywiseButton = document.getElementById('monthlywiseButton');
const paymentDetails = document.getElementById('paymentDetails');
const recheckDetails = document.getElementById('recheckDetails');
const form = document.getElementById('form');
const paymentOptionInput = document.getElementById('paymentOption');

// Show the registration form when the user clicks "Click for Registration"
registerButton.addEventListener('click', function () {
    paymentDetails.style.display = 'block'; // Show the form
    document.getElementById('paymentOptions').style.display = 'none'; // Hide payment options
});

// Set payment option to 'Daywise' and show corresponding details
daywiseButton.addEventListener('click', function () {
    paymentOptionInput.value = 'Daywise (₹299 per day)';
    alert('You have selected Daywise payment option (₹299 per day).');
});

// Set payment option to 'Monthlywise' and show corresponding details
monthlywiseButton.addEventListener('click', function () {
    paymentOptionInput.value = 'Monthlywise (₹3999 per month)';
    alert('You have selected Monthlywise payment option (₹3999 per month).');
});

// Handle the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from actually submitting

    // Get user input values
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const purpose = document.getElementById('purpose').value;
    const paymentOption = paymentOptionInput.value;

    // Display the entered details for recheck
    recheckDetails.style.display = 'block';
    recheckDetails.innerHTML = `
        <h3>Thank you for registering! Here are your details:</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Payment Option:</strong> ${paymentOption}</p>
        <button id="confirmButton">Confirm Registration</button>
    `;

    // Handle confirmation
    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', function () {
        alert('Thanks for registering! Your details have been submitted.');
        // Reset the form and hide recheck details
        form.reset();
        paymentDetails.style.display = 'none';
        recheckDetails.style.display = 'none';
    });
});

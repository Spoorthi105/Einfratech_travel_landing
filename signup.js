document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get user input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Store user data in Local Storage
    const userData = { name, email, mobile };
    localStorage.setItem("user", JSON.stringify(userData));

    // Show success message
    document.getElementById("success-message").classList.remove("hidden");

    // Clear the form fields
    document.getElementById("signup-form").reset();
});

/* ========================================================
   JavaScript File for SmartHome Tech Website
   Subject: Web Technologies (BSc IT - Semester 1)
   Description:
   Simple, easy-to-understand student script for:
   1. Shopping Cart Item Counter
   2. Interactive Device Simulator (Light, Lock, AC)
   3. Form Validation for the Inquiry / Order Form
   ======================================================== */

// Variable to store total number of items in the cart
var cartCount = 0;

// Function 1: Add product to cart and update counter
function addToCart(productName, productPrice) {
    // Increase count by 1
    cartCount = cartCount + 1;

    // Update the cart number in the header using getElementById
    document.getElementById("cart-counter").innerText = cartCount;

    // Show a polite alert confirmation to the user
    alert(productName + " added to your cart! Price: Rs. " + productPrice);
}

// Variables to keep track of simulator device states (True = ON, False = OFF)
var isLightOn = false;
var isDoorLocked = true;
var isAcEcoMode = false;

// Function 2: Toggle Living Room Light
function toggleLight() {
    var lightElement = document.getElementById("light-indicator");

    // Check current state and toggle it
    if (isLightOn === false) {
        // Turn Light ON
        lightElement.innerText = "Light is ON";
        lightElement.className = "status-indicator light-on";
        isLightOn = true;
    } else {
        // Turn Light OFF
        lightElement.innerText = "Light is OFF";
        lightElement.className = "status-indicator light-off";
        isLightOn = false;
    }
}

// Function 3: Toggle Smart Door Lock
function toggleDoor() {
    var lockElement = document.getElementById("lock-indicator");

    // Check current state and toggle it
    if (isDoorLocked === true) {
        // Unlock Door
        lockElement.innerText = "Door is UNLOCKED";
        lockElement.className = "status-indicator door-unlocked";
        isDoorLocked = false;
    } else {
        // Lock Door
        lockElement.innerText = "Door is LOCKED";
        lockElement.className = "status-indicator door-locked";
        isDoorLocked = true;
    }
}

// Function 4: Toggle Air Conditioner Eco Mode
function toggleAcMode() {
    var acElement = document.getElementById("ac-indicator");

    // Check current state and toggle between Eco and Normal
    if (isAcEcoMode === false) {
        // Enable Eco Mode
        acElement.innerText = "Current: 26°C (Eco Mode Active)";
        acElement.className = "status-indicator ac-eco";
        isAcEcoMode = true;
    } else {
        // Switch back to Normal Mode
        acElement.innerText = "Current: 24°C (Normal Mode)";
        acElement.className = "status-indicator ac-normal";
        isAcEcoMode = false;
    }
}

// Function 5: Simple Form Validation
function validateForm(event) {
    // Prevent the page from automatically reloading upon submit
    event.preventDefault();

    // Get input values entered by the user
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var product = document.getElementById("productSelect").value;
    var feedbackBox = document.getElementById("formFeedback");

    // Basic validation check: verify name and email are not empty
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if user selected a product
    var selectedProductText = product !== "" ? product : "General Inquiry";

    // Display friendly success message on the webpage
    feedbackBox.style.display = "block";
    feedbackBox.style.backgroundColor = "#dcfce7";
    feedbackBox.style.color = "#166534";
    feedbackBox.style.border = "1px solid #86efac";
    feedbackBox.innerText = "Thank you, " + name + "! Your inquiry for '" + selectedProductText + "' has been submitted successfully.";

    // Show popup alert
    alert("Inquiry successfully submitted!");

    // Reset form fields
    document.getElementById("contactForm").reset();

    return true;
}

// Reusable function
function isEmpty(value) {
    return value.trim() === "";
}

// Validate Name
function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (isEmpty(name)) {
        error.textContent = "Name is required";
        return false;
    } else if (name.length < 3) {
        error.textContent = "Name must be at least 3 characters";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (isEmpty(email)) {
        error.textContent = "Email is required";
        return false;
    } else if (!pattern.test(email)) {
        error.textContent = "Invalid email format";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Validate Message
function validateMessage() {
    let message = document.getElementById("message").value;
    let error = document.getElementById("messageError");

    if (isEmpty(message)) {
        error.textContent = "Message cannot be empty";
        return false;
    } else if (message.length < 10) {
        error.textContent = "Message must be at least 10 characters";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Real-time validation on keypress
document.getElementById("name").addEventListener("keyup", validateName);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("message").addEventListener("keyup", validateMessage);

// Double-click submit
document.getElementById("submitBtn").addEventListener("dblclick", function() {

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    let successMessage = document.getElementById("formSuccess");

    if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.textContent = "✅ Feedback submitted successfully!";
    } else {
        successMessage.textContent = "❌ Please fix errors before submitting.";
    }
});

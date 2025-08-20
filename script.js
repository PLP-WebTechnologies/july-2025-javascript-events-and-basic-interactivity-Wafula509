// ===================================
// Part 1 & 2: Interactive Elements and Event Handling
// ===================================

// --- Feature 1: Light/Dark Mode Toggle ---
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Event listener for the theme toggle button
themeToggleButton.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Change the button text based on the current mode
  if (body.classList.contains('dark-mode')) {
    themeToggleButton.textContent = 'Switch to Light Mode';
  } else {
    themeToggleButton.textContent = 'Switch to Dark Mode';
  }
});

// --- Feature 2: Collapsible FAQ Section ---
// Select all FAQ question elements
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and add a click event listener
faqQuestions.forEach(function(question) {
  question.addEventListener('click', function() {
    // Get the parent .faq-item of the clicked question
    const faqItem = this.parentElement;
    
    // Toggle the 'active' class on the parent item
    faqItem.classList.toggle('active');
  });
});

// ===================================
// Part 3: Form Validation
// ===================================

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Listen for the form submission event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Reset previous error messages
  clearErrors();

  let isValid = true;

  // --- Validation Logic ---

  // 1. Name Validation
  if (nameInput.value.trim() === '') {
    displayError('name-error', 'Name is required.');
    isValid = false;
  } else if (nameInput.value.trim().length < 3) {
    displayError('name-error', 'Name must be at least 3 characters.');
    isValid = false;
  }

  // 2. Email Validation using a simple Regular Expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    displayError('email-error', 'Please enter a valid email address.');
    isValid = false;
  }

  // 3. Password Validation
  if (passwordInput.value.length < 8) {
    displayError('password-error', 'Password must be at least 8 characters.');
    isValid = false;
  }

  // If all fields are valid, show a success message
  if (isValid) {
    document.getElementById('form-success').textContent = 'Form submitted successfully!';
    form.reset(); // Clear the form fields
  }
});

// Helper function to display an error message
function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

// Helper function to clear all error messages
function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(function(el) {
    el.textContent = '';
  });
  document.getElementById('form-success').textContent = '';
}
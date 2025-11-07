
function showLogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}
// Grab elements
const loginForm = document.getElementById('loginForm');
const guestBtn = document.getElementById('guestBtn');

// When user clicks login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form default submission
  // Directly go to homepage
  window.location.href = "index.html"; // Replace with your homepage path
});

// When user clicks guest
guestBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form default submission
  // Directly go to homepage
  window.location.href = "index.html"; // Replace with your homepage path
});
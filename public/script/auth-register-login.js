// =======================
// REGISTER FORM HANDLER
// =======================

// Check if the register form exists before attaching the event listener
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way (page reload)
  
    // Collect user input from the form and trim whitespace
    const user = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      gender: document.getElementById("gender").value,
      email: document.getElementById("registerEmail").value.trim(),
      password: document.getElementById("registerPassword").value
    };
  
    // Get existing users from localStorage (or an empty array if none exist)
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if a user with the same email is already registered
    if (users.find(u => u.email === user.email)) {
      alert("Email already registered.");
      return; // Stop the registration process
    }
  
    // Add the new user to the users array
    users.push(user);
  
    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Notify the user and redirect to login page
    alert("Registration successful. Please login.");
    window.location.href = "login.html";
  });
  
  // =======================
  // LOGIN FORM HANDLER
  // =======================
  
  // Check if the login form exists before attaching the event listener
  document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Get the entered email and password from the login form
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
  
    // Get the list of registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Try to find a user with matching email and password
    const found = users.find(u => u.email === email && u.password === password);
  
    if (found) {
      // Save the logged-in user's data in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(found));
  
      // Redirect to the to-do list page after successful login
      window.location.href = "todo.html";
    } else {
      // Show an error message if login fails
      alert("Invalid credentials.");
    }
  });
  
// // function toggleDarkMode() {
// //   document.body.classList.toggle('dark-mode');

// //   const icon = document.getElementById('theme-icon');
// //   const logo = document.getElementById('logo-img'); // Add this

// //   if (document.body.classList.contains('dark-mode')) {
// //     icon.textContent = "🔆";
// //     logo.src = "/images/myLogoWhite.png"; // White logo for dark mode
// //   } else {
// //     icon.textContent = "🌙";
// //     logo.src = "/images/myLogoBlack.png"; // Black logo for light mode
// //   }
// // }

// function toggleDarkMode() {
//   document.body.classList.toggle('dark-mode');

//   const icon = document.getElementById('theme-icon');
//   const logo = document.getElementById('logo-img');

//   const isDarkMode = document.body.classList.contains('dark-mode');

//   // Save preference to localStorage
//   localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

//   // Update icon and logo
//   icon.textContent = isDarkMode ? "🔆" : "🌙";
//   logo.src = isDarkMode ? "/images/myLogoWhite.png" : "/images/myLogoBlack.png";
// }

// theme.js
// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;
//   const icon = document.getElementById("theme-icon");

//   // Apply saved mode
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     body.classList.add("dark-mode");
//     if (icon) icon.textContent = "🔆";
//   }

//   // Toggle button
//   if (icon) {
//     icon.addEventListener("click", () => {
//       body.classList.toggle("dark-mode");
//       const isDark = body.classList.contains("dark-mode");

//       localStorage.setItem("theme", isDark ? "dark" : "light");
//       icon.textContent = isDark ? "🔆" : "🌙";
//       logo.src = isDarkMode ? "/images/myLogoWhite.png" : "/images/myLogoBlack.png";
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  const logo = document.getElementById("logo"); // Add this!

  // Apply saved mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (icon) icon.textContent = "🔆";
    if (logo) logo.src = "/images/myLogo.png"; //  Set correct logo
  }

  // Toggle button
  if (icon) {
    icon.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDark ? "dark" : "light");
      icon.textContent = isDark ? "🔆" : "🌙";
      //if (logo) logo.src = isDark ? "/images/myLogoWhite.png" : "/images/myLogoBlack.png";
      if (logo) logo.src = "/images/myLogo.png";
    });
  }
});

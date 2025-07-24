// File: scripts/main.js

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggle.querySelector("span");
    if (document.body.classList.contains("dark-mode")) {
      icon.textContent = "☀️";
    } else {
      icon.textContent = "🌙";
    }
  });
});


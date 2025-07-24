// File: assets/main.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('darkModeToggle');
  
  if (!toggleButton) return;

  function applyTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
  }

  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Apply theme on page load
  applyTheme();
});


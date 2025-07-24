// File: assets/main.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('darkModeToggle');
  const logoImage = document.getElementById('logoImage');
  
  if (!toggleButton) return;

  // Determine if we're in a subfolder by checking the current logo src
  const isSubfolder = logoImage && logoImage.src.includes('../assets/');
  const assetPath = isSubfolder ? '../assets/' : 'assets/';

  function applyTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    if (logoImage) {
      logoImage.src = isDark
        ? `${assetPath}Trivance_AI_Logo_Full_invert_no_back.png`
        : `${assetPath}Trivance_AI_Logo_Full.png`;
    }
  }

  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (logoImage) {
      logoImage.src = isDark
        ? `${assetPath}Trivance_AI_Logo_Full_invert_no_back.png`
        : `${assetPath}Trivance_AI_Logo_Full.png`;
    }
  });

  // Apply theme on page load
  applyTheme();
});


// File: assets/main.js

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const logoImage = document.getElementById("logoImage");
  
  if (!toggle) return;

  // Determine if we're in a subfolder by checking the current logo src
  const isSubfolder = logoImage && logoImage.src.includes('../assets/');
  const assetPath = isSubfolder ? '../assets/' : 'assets/';

  // Set initial logo based on current theme
  const setLogo = (isDark) => {
    if (logoImage) {
      logoImage.src = isDark
        ? `${assetPath}Trivance_AI_Logo_Full_invert_no_back.png`
        : `${assetPath}Trivance_AI_Logo_Full_no_background.png`;
    }
  };

  // Set logo on page load
  const isDarkOnLoad = document.body.classList.contains('dark-mode');
  setLogo(isDarkOnLoad);

  // Toggle dark mode and logo
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    setLogo(isDark);
  });
});


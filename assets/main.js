// File: assets/main.js

document.addEventListener("DOMContentLoaded", function () {
  // Page loaded - ready for any future JavaScript functionality
  console.log('Trivance AI website loaded');
  
  // Animate framework section on page load
  const framework = document.querySelector('.framework');
  if (framework) {
    framework.style.opacity = '1';
    framework.style.transform = 'translateY(0)';
  }
  
  // Handle step link clicks for interactive content
  const stepLinks = document.querySelectorAll('.step-link');
  const detailImages = {
    clarity: 'assets/clarity-home-details-new.png',
    strategy: 'assets/strategy-home-details.png',
    execution: 'assets/execution_training_advisory-home-details.png'
  };

  if (stepLinks.length > 0) {
    stepLinks.forEach(link => {
      link.addEventListener('click', () => {
        const step = link.dataset.step;
        if (!step || !detailImages[step]) return;

        stepLinks.forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.step-detail').forEach(d => d.classList.remove('active'));

        link.classList.add('active');

        const detailContainer = document.getElementById(`${step}-detail`);
        if (detailContainer) {
          detailContainer.innerHTML = `<img src="${detailImages[step]}" alt="${step} details">`;
          detailContainer.classList.add('active');
        }
      });

      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          link.click();
        }
      });
    });
  }
});


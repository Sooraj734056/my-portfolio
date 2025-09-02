// ===== Select Elements =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// ===== Smooth Scroll =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // menu close after click (for mobile)
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===== Toggle Menu =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// ===== AOS Animation =====
AOS.init({
  duration: 1000,
  once: true
});

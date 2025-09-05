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

// ===== Toggle Menu (left drawer) =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// ===== AOS Animation =====
AOS.init({
  duration: 1000,
  once: true
});

// ===== Hero Typing Animation =====
const typingEl = document.getElementById('typing');
const words = [
  "I’m Sooraj Sharma",
  "Full Stack Web Developer",
  "Creative Designer",
  "DevOps Learner"
];

let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];

  if (!deleting) {
    typingEl.textContent = word.slice(0, c + 1);
    c++;
    if (c === word.length) {
      deleting = true;
      setTimeout(type, 1200); // pause at end
      return;
    }
  } else {
    typingEl.textContent = word.slice(0, c - 1);
    c--;
    if (c === 0) {
      deleting = false;
      w = (w + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 70 : 110);
}
document.addEventListener('DOMContentLoaded', type);

// ===== Premium touches =====

// Shrink/blur header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Active nav link while scrolling
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120; // header offset
  let current = '';
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      current = sec.getAttribute('id');
    }
  });
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});
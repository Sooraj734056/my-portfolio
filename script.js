document.addEventListener('DOMContentLoaded', () => {
  // ===== Select Elements =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const backTop = document.querySelector('.back-to-top');
  const typingEl = document.getElementById('typing');
  const sections = document.querySelectorAll('section[id]');
  const skillCircles = document.querySelectorAll('.skill-circle');

  // ===== Smooth Scroll =====
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      navLinks?.classList.remove('active');
      hamburger?.classList.remove('active');
    });
  });

  // ===== Toggle Hamburger Menu =====
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // ===== AOS Init =====
  if (window.AOS) AOS.init({ duration: 1000, once: true });

  // ===== Hero Typing Animation =====
  if (typingEl) {
    const words = ["I’m Sooraj Sharma", "Full Stack Web Developer", "Creative Designer", "DevOps Learner"];
    let w = 0, c = 0, deleting = false;

    function type() {
      const word = words[w];
      if (!deleting) {
        typingEl.textContent = word.slice(0, c + 1);
        c++;
        if (c === word.length) { deleting = true; setTimeout(type, 1200); return; }
      } else {
        typingEl.textContent = word.slice(0, c - 1);
        c--;
        if (c === 0) { deleting = false; w = (w + 1) % words.length; }
      }
      setTimeout(type, deleting ? 70 : 110);
    }
    type();
  }

  // ===== Header scroll effect + Back to top =====
  window.addEventListener('scroll', () => {
    document.querySelector('header')?.classList.toggle('scrolled', window.scrollY > 20);
    if (backTop) backTop.style.display = (window.scrollY > 500) ? 'block' : 'none';
  });

  // ===== Scroll spy =====
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
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

  // ===== Back to top click =====
  backTop?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  });
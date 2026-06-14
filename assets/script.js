document.addEventListener('DOMContentLoaded', () => {

  // --- STICKY NAV ---
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    const [s0, s1, s2] = hamburger.querySelectorAll('span');
    s0.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    s1.style.opacity   = open ? '0' : '1';
    s2.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // --- FAQ ACCORDION ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });

  // --- SCROLL REVEAL (IntersectionObserver) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.revealDelay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  // Stagger grid children
  document.querySelectorAll('.services-grid .service-card').forEach((el, i) => { el.dataset.revealDelay = i * 70; });
  document.querySelectorAll('.why-grid .why-card').forEach((el, i)          => { el.dataset.revealDelay = i * 80; });
  document.querySelectorAll('.process-step').forEach((el, i)                => { el.dataset.revealDelay = i * 100; });
  document.querySelectorAll('.achievement-small').forEach((el, i)           => { el.dataset.revealDelay = i * 80; });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // --- SMOOTH SCROLL WITH NAV OFFSET ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });

  // --- LOGO FALLBACK ---
  document.querySelectorAll('.nav-logo-img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = 'inline';
    });
  });

});

document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealTargets = document.querySelectorAll(
  '.service-row, .gallery-card, .review-card, .about-copy, .visit-copy'
);

const heroArt = document.querySelector('.hero-art');
const archMain = document.querySelector('.arch-main');
const archSmall = document.querySelector('.arch-small');

if (heroArt && archMain && archSmall && window.matchMedia('(hover: hover)').matches) {
  heroArt.addEventListener('mousemove', (e) => {
    const rect = heroArt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    archMain.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    archSmall.style.transform = `translate(${x * -14}px, ${y * -14}px)`;
  });
  heroArt.addEventListener('mouseleave', () => {
    archMain.style.transform = '';
    archSmall.style.transform = '';
  });
}

if ('IntersectionObserver' in window) {
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

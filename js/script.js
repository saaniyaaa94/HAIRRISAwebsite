document.getElementById('year').textContent = new Date().getFullYear();

const curtain = document.getElementById('curtain');
if (curtain) {
  let curtainHidden = false;
  const hideCurtain = () => {
    if (curtainHidden) return;
    curtainHidden = true;
    curtain.classList.add('hide');
    setTimeout(() => curtain.remove(), 900);
  };
  window.addEventListener('load', hideCurtain);
  setTimeout(hideCurtain, 1200);
}

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
  '.service-tile, .gallery-card, .review-card, .about-copy, .visit-copy'
);

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

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const menu = document.getElementById('menu');
const links = document.getElementById('navLinks');

function closeMenu() {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}

menu?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

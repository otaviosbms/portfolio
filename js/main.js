// ===== Theme toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

// ===== Mobile nav =====
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');

navBurger.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  navBurger.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navBurger.classList.remove('open');
  });
});

// ===== Typed roles effect =====
const typedEl = document.getElementById('typed');
const roles = [
  'Desenvolvedor Backend Pleno',
  'TypeScript · NestJS · LangGraph',
  'Automações & Agentes de IA'
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 65);
}

typeLoop();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

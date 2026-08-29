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
const rolesByLang = {
  pt: [
    'Desenvolvedor Backend Pleno',
    'TypeScript · NestJS · LangGraph',
    'Automações & Agentes de IA'
  ],
  en: [
    'Mid-level Backend Developer',
    'TypeScript · NestJS · LangGraph',
    'AI Automations & Agents'
  ]
};

let roles = rolesByLang.pt;
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

// ===== Nav scroll shadow =====
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== Active nav link on scroll =====
const navLinkEls = document.querySelectorAll('.nav-links a');
const sectionEls = [...navLinkEls]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinkEls.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sectionEls.forEach((section) => sectionObserver.observe(section));

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Language toggle =====
const langToggle = document.getElementById('langToggle');

const translationsEn = {
  'nav-about': 'About',
  'nav-experience': 'Experience',
  'nav-skills': 'Skills',
  'nav-projects': 'Projects',
  'nav-contact': 'Contact',
  'theme-toggle-aria': 'Toggle theme',
  'nav-burger-aria': 'Open menu',

  'hero-eyebrow': 'Hi, I’m',
  'hero-lead': 'Mid-level Backend Developer with <strong>3 years of experience</strong> building robust APIs, integrations and <strong>AI</strong> products focused on real business outcomes.',
  'cta-projects': 'View projects <i class="fa-solid fa-arrow-down"></i>',
  'cta-cv': '<i class="fa-solid fa-download"></i> Download CV',

  'stat-years': 'Years of experience',
  'stat-trajectory-number': 'Intern → Mid-level',
  'stat-trajectory': 'Growth path at PedBot',
  'stat-tech': 'Technologies in the stack',
  'stat-ia-number': 'AI',
  'stat-agents': 'Agents in production',

  'about-tag': 'About me',
  'about-title': 'Who is Otávio',
  'about-p1': 'I’m a <strong>Mid-level Backend Developer</strong>, born and raised in Marília - SP, Brazil, currently pursuing a Bachelor’s in Computer Science at <strong>Centro Universitário Eurípides de Marília (UNIVEM)</strong>.',
  'about-p2': 'Over the past 3 years I’ve been growing at <strong>PedBot</strong> (Grupo Funcional Health Tech), where I went from intern to mid-level developer, architecting <strong>scalable APIs</strong> and <strong>AI</strong> products with autonomous agents in production, focused on performance, best practices and real business impact.',
  'about-p3': 'Today my focus is <strong>TypeScript</strong>, <strong>NestJS</strong> and <strong>LangGraph</strong> — combining solid backend engineering with AI agents to solve real business problems. Naturally curious, I enjoy learning a bit more every day and supporting developers early in their careers.',

  'term-role': '&gt; Mid-level Backend Developer',
  'term-location': '&gt; Marília, SP - Brazil',
  'term-stack2': '&gt; Scalable APIs + AI Agents',
  'term-cmd-interests': 'cat interests.txt',
  'term-interests': '&gt; Backend, applied AI and good architecture practices',

  'exp-tag': 'Journey',
  'exp-title': 'Professional Experience',
  'ladder-intern': 'Intern',
  'ladder-jr1': 'Junior I',
  'ladder-jr2': 'Junior II',
  'ladder-mid': 'Mid-level',
  'exp-role-title': 'Mid-level Developer · PedBot',
  'exp-sub': 'Grupo Funcional Health Tech — Remote',
  'exp-date': 'Nov/2023 — present',
  'exp-desc': 'Development, maintenance and evolution of web systems and scalable APIs, actively contributing to AI products with autonomous agents, plus internal automations that streamline the team’s and company’s processes and workflows.',
  'hl1-title': 'AI Chatbot — Boehringer Ingelheim',
  'hl1-desc': 'Conversational AI chatbot for the benefits program of <strong>Boehringer Ingelheim do Brasil</strong>, with automated support flows, in partnership with Grupo Funcional Health Tech.',
  'hl2-title': 'MarIA — Sales chatbot with AI agents',
  'hl2-desc': 'Sales agent in production orchestrated with <strong>LangGraph</strong> and integrated with the <strong>WhatsApp API</strong>, adopted by large national retail chains, with a POC approved by <strong>Grupo DPSP</strong>.',

  'task-1': 'Full stack development of applications and backend services',
  'task-2': 'Creation and maintenance of REST and GraphQL APIs',
  'task-3': 'RabbitMQ queues for background processing',
  'task-4': 'AI agent flows and automations',
  'task-5': 'Service integration and processing pipelines',
  'task-6': 'Software architecture decisions',
  'task-7': 'Code review and technical mentoring',
  'task-8': 'Unit testing and Clean Architecture',

  'skills-tag': 'Skills',
  'skills-title': 'Stack & Tools',
  'sk-backend': 'Backend & Data',
  'sk-ai': 'AI & Automation',
  'sk-practices': 'Practices & Tools',
  'chip-ai-agents': 'AI Agents',
  'chip-ai-automation': 'AI Automations',
  'chip-llm-integrations': 'LLM Integrations',
  'chip-mcp': 'MCP Development',
  'chip-unit-tests': 'Unit Testing',
  'chip-software-arch': 'Software Architecture',

  'proj-tag': 'Work',
  'proj-title': 'Featured Projects',
  'badge-professional': 'Professional Project',
  'p1-title': 'MarIA — AI Sales Agents',
  'p1-desc': 'Sales chatbot based on AI agents in production, orchestrated with LangGraph and integrated with the WhatsApp API, adopted by large national retail chains, with a POC approved by Grupo DPSP.',
  'p2-desc': 'GraphQL API built with Express and Apollo Server to collect OLX listings, with pagination and filtering by state, using Puppeteer with stealth for scraping.',
  'p3-desc': 'Unofficial API that exposes Jusbrasil searches (court cases, case law, legislation, official gazettes and legal doctrine) via REST and MCP, using a real browser to work around the site’s anti-bot protection.',
  'p4-desc': 'API that analyzes Spotify playlists: collects tracks, artists and metadata, calculates genre and duration stats, and generates AI-powered recommendations and insights (OpenAI/DeepSeek).',
  'p5-title': 'Full Stack Inventory Control',
  'p5-desc': 'Complete web application for a business’s inventory control, with product registration, stock movements and reports.',
  'p6-title': 'Social Network API',
  'p6-desc': 'API for a simplified social network, inspired by X/Twitter, with authentication, posts and relationships between users.',
  'project-link': 'View repository',
  'see-more-github': 'See more on GitHub',

  'edu-tag': 'Education',
  'edu-title': 'Education & Languages',
  'edu1-title': 'Bachelor’s in Computer Science',
  'edu2-title': 'Languages',
  'lang-pt': 'Portuguese — Native',
  'lang-en': 'English — Advanced',

  'contact-tag': 'Contact',
  'contact-title': 'Let’s talk?',
  'contact-lead': 'Have a question or want to discuss a project? Reach out through any of the channels below.',

  'footer-location': 'Otávio Sbms · Marília - SP, Brazil',
  'footer-published': 'Published with',
  'footer-love': 'Made with ❤️',

  'meta-title': 'Otávio Sbms — Backend & AI Developer',
  'meta-description': 'Otávio Sbms, Mid-level Backend Developer specialized in TypeScript, NestJS and LangGraph. Building scalable APIs and AI automations.'
};

const i18nEls = document.querySelectorAll('[data-i18n]');
const originalHTML = new Map();
i18nEls.forEach((el) => originalHTML.set(el, el.innerHTML));

const i18nAriaEls = document.querySelectorAll('[data-i18n-aria]');
const originalAria = new Map();
i18nAriaEls.forEach((el) => originalAria.set(el, el.getAttribute('aria-label')));

const metaDescriptionEl = document.querySelector('meta[data-i18n-content]');
const originalMetaDescription = metaDescriptionEl.getAttribute('content');
const originalTitle = document.title;

function applyLang(lang) {
  const isEn = lang === 'en';

  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = isEn && translationsEn[key] ? translationsEn[key] : originalHTML.get(el);
  });

  i18nAriaEls.forEach((el) => {
    const key = el.dataset.i18nAria;
    el.setAttribute('aria-label', isEn && translationsEn[key] ? translationsEn[key] : originalAria.get(el));
  });

  document.title = isEn ? translationsEn['meta-title'] : originalTitle;
  metaDescriptionEl.setAttribute('content', isEn ? translationsEn['meta-description'] : originalMetaDescription);

  langToggle.setAttribute('aria-label', isEn ? 'Mudar para português' : 'Switch to English');

  root.setAttribute('data-lang', isEn ? 'en' : 'pt');
  root.setAttribute('lang', isEn ? 'en' : 'pt-br');

  roles = isEn ? rolesByLang.en : rolesByLang.pt;
  roleIndex = 0;
  charIndex = 0;
  deleting = false;
}

const savedLang = localStorage.getItem('lang') || 'pt';
applyLang(savedLang);

langToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-lang') === 'en' ? 'pt' : 'en';
  localStorage.setItem('lang', current);
  applyLang(current);
});

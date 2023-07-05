const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;
const themeIcon = document.getElementById('themeIcon');
const email = document.getElementById('email');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');


darkModeSwitch.addEventListener('change', () => {
  
  if (darkModeSwitch.checked) {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    email.classList.remove('social');
    email.classList.add('socialClaro');
    github.classList.remove('social');
    github.classList.add('socialClaro');
    linkedin.classList.remove('social');
    linkedin.classList.add('socialClaro');
    instagram.classList.remove('social');
    instagram.classList.add('socialClaro');

  } else {
    body.classList.remove('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    email.classList.remove('socialClaro');
    email.classList.add('social');
    github.classList.remove('socialClaro');
    github.classList.add('social');
    linkedin.classList.remove('socialClaro');
    linkedin.classList.add('social');
    instagram.classList.remove('socialClaro');
    instagram.classList.add('social');

  }

});
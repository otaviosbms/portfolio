const temasimg =  document.getElementById('temasimg');

const body = document.querySelector('body');
const topbox = document.getElementById('topbox');
const rightbox = document.getElementById('rightbox');
const infobox = document.getElementById('infobox');
const nicho = document.getElementById('nicho');

const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const php = document.getElementById('php');
const py = document.getElementById('py');

const insta = document.getElementById('instagram');
const linkedin = document.getElementById('linkedin');
const git = document.getElementById('github');
const mail = document.getElementById('mail');


function escuro()
{
body.className = "";
topbox.className = "topboxcontainer";
rightbox.className = "rightboxcontainer";
rightbox.className = "rightboxcontainer a";
infobox.className = "infoboxcontainer";
nicho.className = "nicho";

html.className = "html"
css.className = "css"
js.className = "js"
php.className = "php"
py.className = "py"

linkedin.innerHTML = "<img src='images/social-icons/linkedin-claro.png' class='linkedinimg' ></img>"
insta.innerHTML = "<img src='images/social-icons/instagram-claro.png' class='instagramimg' ></img>"
git.innerHTML = "<img src='images/social-icons/Github-claro.png' class='githubimg' ></img>"
mail.innerHTML = "<img src='images/social-icons/mail-claro.png' class='mailimg' ></img>"


}

function claro()
{
    body.className = "modoclaroback";
    topbox.className = "modoclarotopbox";
    rightbox.className = "modoclarorightbox";
    infobox.className = "modoclaroinfobox";
    nicho.className = "modoclaronicho";

    html.className = "html-claro"
    css.className = "css-claro"
    js.className = "js-claro"
    php.className = "php-claro"
    py.className = "py-claro"

    linkedin.innerHTML = "<img src='images/social-icons/linkedin.png' class='linkedinimg' ></img>"
    insta.innerHTML = "<img src='images/social-icons/instagram.png' class='instagramimg' ></img>"
    git.innerHTML = "<img src='images/social-icons/Github.png' class='githubimg' ></img>"
    mail.innerHTML = "<img src='images/social-icons/mail.png' class='mailimg' ></img>"
}

var tema = "claro";

function trocar_tema()
{
    if(tema == "claro"){
    escuro();
    temasimg.innerHTML = "<img onclick='trocar_tema()' id='btntemasol' src='images/sol.png'>"
    return tema = "escuro";
}else{
    claro();
    temasimg.innerHTML = "<img onclick='trocar_tema()' id='btntema' src='images/lua.png'>"
    return tema = "claro";
}
}
var temasimg =  document.getElementById('temasimg');

var body = document.querySelector('body');
var topbox = document.getElementById('topbox');
var rightbox = document.getElementById('rightbox');
var infobox = document.getElementById('infobox');
var nicho = document.getElementById('nicho');

var html = document.getElementById('html');
var css = document.getElementById('css');
var js = document.getElementById('js');
var php = document.getElementById('php');
var py = document.getElementById('py');


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
}

var tema;

function trocar_tema()
{
    if(tema == "claro"){
    escuro();
    temasimg.innerHTML = "<img onclick='trocar_tema()' id='btntemasol' src='images/sol.png'>"
    return tema = "escuro";
}

else{
    claro();
    temasimg.innerHTML = "<img onclick='trocar_tema()' id='btntema' src='images/lua.png'>"
    return tema = "claro";
}
}
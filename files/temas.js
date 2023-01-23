var temasimg =  document.getElementById('temasimg');

var body = document.querySelector('body');
var topbox = document.getElementById('topbox');
var rightbox = document.getElementById('rightbox');
var infobox = document.getElementById('infobox');
var nicho = document.getElementById('nicho');


function escuro()
{
body.className = "";
topbox.className = "topboxcontainer";
rightbox.className = "rightboxcontainer";
rightbox.className = "rightboxcontainer a";
infobox.className = "infoboxcontainer";
nicho.className = "nicho";
}

function claro()
{
    body.className = "modoclaroback";
    topbox.className = "modoclarotopbox";
    rightbox.className = "modoclarorightbox";
    infobox.className = "modoclaroinfobox";
    nicho.className = "modoclaronicho";
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
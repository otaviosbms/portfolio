var btnclaro = document.getElementById('btnclaro');
var btnescuro = document.getElementById('btnescuro');


var body = document.querySelector('body');

var topbox = document.getElementById('topbox');
var rightbox = document.getElementById('rightbox');
var infobox = document.getElementById('infobox');
var nicho = document.getElementById('nicho');

btnclaro.onclick = function claro(){
    body.className = "modoclaroback";
    topbox.className = "modoclarotopbox";
    rightbox.className = "modoclarorightbox";
    infobox.className = "modoclaroinfobox";
    nicho.className = "modoclaronicho";
    btnclaro.className = ""
    btnescuro.className = ""
}

btnescuro.onclick = function escuro(){
    body.className = "";
    topbox.className = "topboxcontainer";
    rightbox.className = "rightboxcontainer";
    rightbox.className = "rightboxcontainer a";
    infobox.className = "infoboxcontainer";
    nicho.className = "nicho";
    btnclaro.className = "modoescuroestilobutton"
    btnescuro.className = "modoescuroestilobutton"
}

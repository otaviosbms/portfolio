var btnclaro = document.getElementById('btnclaro');
var btnescuro = document.getElementById('btnescuro');


var body = document.querySelector('body');

var topbox = document.querySelector('header');
var rightbox = document.getElementsByClassName('rightboxcontainer');
var infobox = document.getElementsByClassName('infoboxcontainer');
var nicho = document.getElementsByClassName('nicho');

btnclaro.onclick = function claro(){
    body.className = "modoclaroback";
    topbox.className = "modoclarotopbox"
    infobox.className = "cusujo";
}

btnescuro.onclick = function escuro(){
    body.className = "";
    topbox.className = "modoescurotopbox"
}

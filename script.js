var btnclaro = document.getElementById('btnclaro');
var btnescuro = document.getElementById('btnescuro');


var body = document.querySelector('body');

var topbox = document.getElementById('topbox');
var rightbox = document.getElementsByClassName('rightboxcontainer');
var infobox = document.getElementsByClassName('infoboxcontainer');
var nicho = document.getElementsByClassName('nicho');

btnclaro.onclick = function claro(){
    body.className = "modoclaroback";
    topbox.className = "modoclarotopbox";
    rightbox
}

btnescuro.onclick = function escuro(){
    body.className = "";
    topbox.className = "topboxcontainer";

}

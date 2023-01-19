var btnescuro = document.getElementById('btnescuro');
var btnclaro = document.getElementById('btnclaro');

var body = document.querySelector('body');
var topbox = document.querySelector('header');
var rightbox = document.getElementsByClassName('rightboxcontainer');
var infobox = document.getElementsByClassName('infoboxcontainer');
var nicho = document.getElementsByClassName('nicho');

btnescuro.onclick = function(){
 body.className = "";
}


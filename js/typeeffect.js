var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Portfólio')
    .pauseFor(2000)
    .deleteChars(9)
    .typeString('Otávio ')
    .pauseFor(1000)
    .typeString('SBMS')
    .start();
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('</ Otávio ')
    .pauseFor(1000)
    .typeString('SBMz >')
    .pauseFor(1500)
    .deleteChars(3)
    .typeString('S >')
    .pauseFor(2500)
    .start();;
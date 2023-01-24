var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Otávio ')
    .pauseFor(1000)
    .typeString('SBMS ')
    .pauseFor(1500)
    .typeString('- Portfólio')
    .pauseFor(1500)
    .deleteChars(12)
    .pauseFor(2500)
    .start();;
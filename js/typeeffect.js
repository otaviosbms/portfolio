var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');

var typewriterTitle = new Typewriter(title, {
    loop: false
});

var typewriterSubtitle = new Typewriter(subtitle, {
    loop: false
});

typewriterTitle.typeString('Portfólio')
    .pauseFor(2000)
    .deleteChars(9)
    .typeString('Otávio ')
    .pauseFor(1000)
    .typeString('Sbms')
    .start();

typewriterSubtitle.pauseFor(8000)
    .typeString('Desenvolvedor FullStack')
    .start();

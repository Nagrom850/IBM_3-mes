const burger = document.querySelector('nav');
const openBtn = document.querySelector('a.open-btn');
const closeBtn = document.querySelector('a.close-btn');
const width = window.innerWidth;


openBtn.addEventListener('click', function (e) {
    //suprime l'effet de base
    e.preventDefault();
    //ajoute open au nav
    burger.classList.add('open');
});

closeBtn.addEventListener('click', function (e) {
    //suprime l'effet de base
    e.preventDefault();
    //supprime open du nav
    burger.classList.remove('open');
});


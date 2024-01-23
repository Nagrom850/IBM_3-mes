//On déclare une constante qui contient toutes les sections de la page
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        //Récupère la position de la section par rapport au haut de la page
        const sectionTop = section.getBoundingClientRect().top;
        //Récupère la position de la section par rapport au bas de la page
        const sectionBottom = section.getBoundingClientRect().bottom;
        //Récupère la hauteur de la fenêtre
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.9 && sectionBottom > windowHeight * 0.2) {
            //Si la section est visible, ajoute la classe visible
            section.classList.add('visible');
        } else {
            //Si la section n'est pas visible, supprime la classe visible
            section.classList.remove('visible'); 
        }

    });
}

//Appelle checkScroll lorsque l'évenement scroll est déclenché
window.addEventListener('scroll', checkScroll);
//Appelle checkScroll lorsque l'évenement DOMContentLoaded est déclenché (lorsque la page est chargée)
window.addEventListener('DOMContentLoaded', checkScroll);

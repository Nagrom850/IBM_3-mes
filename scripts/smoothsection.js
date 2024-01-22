

const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); 
        }
    });
}

window.addEventListener('scroll', checkScroll);

window.addEventListener('DOMContentLoaded', checkScroll);


// Définir le décalage de défilement en pixels (ajustable selon la taille d'une carte)
const scrollAmount = 340; 

function scrollLeft() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.scrollBy({
        left: -scrollAmount, // défile vers la gauche
        behavior: 'smooth'
    });
}

function scrollRight() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.scrollBy({
        left: scrollAmount, // défile vers la droite
        behavior: 'smooth'
    });
}

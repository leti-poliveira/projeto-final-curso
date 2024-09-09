// Seleciona os elementos do botão e do menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

// Estado do menu (fechado ou aberto)
let isMenuOpen = false;

// Adiciona evento de clique no botão
menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        menuBtn.classList.add('open');
        navMenu.classList.add('active');
        isMenuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('active');
        isMenuOpen = false;
    }
});

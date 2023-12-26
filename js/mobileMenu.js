const menu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.mobile__btn-open');
const btnCloseMenu = document.querySelector('.mobile__btn-close');
const menuLinks = menu.querySelectorAll('.mobile-menu__link');

const openMenu = () => menu.classList.add('is-open');
const closeMenu = () => menu.classList.remove('is-open');

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open');
    })
});
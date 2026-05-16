const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

if (menuToggle && navBar) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navBar.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('icon-mobile');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-menu');
    });
});
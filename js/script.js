document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('icon-mobile');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-menu');
    });
});

// ==========================================================================
// Car Filtering with Isotope
// ==========================================================================
// init Isotope
var $cars = $('.all-cars').isotope({
    originLeft: true,
});

// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $cars.isotope({ filter: filterValue });
});

const buttons = document.querySelectorAll('.filter-button-group .btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hovering');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovering');
    });
});
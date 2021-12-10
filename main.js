const hamburgerButton = document.querySelector('.header-right > a');

const hamburgerCloseButton = document.querySelector('.hamburger-menu .close')

const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerButton.addEventListener('click', function(){

    hamburgerMenu.classList.add('active');

});

hamburgerCloseButton.addEventListener('click', function(){

    hamburgerMenu.classList.remove('active');

});
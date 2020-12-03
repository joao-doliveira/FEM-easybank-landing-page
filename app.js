const navbar = document.querySelector('.navbar')
const navbarButton = document.querySelector('.header__ham')

function toggleNavbar(){
    navbar.classList.toggle('navbar--show')
    navbarButton.classList.toggle('header__ham--close')
}

navbarButton.addEventListener('click', toggleNavbar)
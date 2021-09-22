function hamburgerMenu() {
    let menuHamburger = document.querySelector('.header__menu-button');
    let otherMenu = document.querySelector('.header__menu');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');

    let state = false;

    menuHamburger.onclick = function () {
        if (state) {
            state = false;
            menuHamburger.classList.remove('header__menu-button-active');
            otherMenu.style.display = "none";
            main.style.display = "block";
            footer.style.display = "block";
        }
        else {
            state = true;
            menuHamburger.classList.add('header__menu-button-active');
            otherMenu.style.display = "flex";
            main.style.display = "none";
            footer.style.display = "none";
        }
    }
}
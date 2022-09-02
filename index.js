const botaoMenu = document.querySelector('.header__menu')
const menuLateral = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu_lateral--ativo')
})
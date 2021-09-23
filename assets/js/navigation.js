document.querySelector('.main-header__burger').addEventListener('click', () => {
    document.querySelector('.main-header__burger').classList.toggle('main-header__burger--opened');
    document.querySelector('.main-header__col').classList.toggle('main-header__col--opened');
    document.querySelector('.main-nav').classList.toggle('main-nav--opened');
})
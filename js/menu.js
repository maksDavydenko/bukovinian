const menuBtn = document.getElementById('menu');
const menuWrap = document.querySelector('.menu-nav__list');

menuBtn.addEventListener('click', () => {
    menuWrap.style.display === 'none' ?  
    menuWrap.style.display = 'flex' :  
    menuWrap.style.display = 'none'
});
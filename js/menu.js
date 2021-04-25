const menuBtn = document.getElementById('menu');
const menuWrap = document.querySelector('.menu-nav__list');
const searchMobile = document.querySelector('.search-mobile');
const searchMobileInput = document.querySelector('.js-search-input');

menuBtn.addEventListener('click', () => {
    menuWrap.style.display === 'flex' ?  
    menuWrap.style.display = 'none' :  
    menuWrap.style.display = 'flex'
});

searchMobile.addEventListener('click', e => {
    !e.target.closest('Input') ?
     searchMobileInput.classList.toggle('display-block'): 
     null;
     
     searchMobileInput.focus()
     
})
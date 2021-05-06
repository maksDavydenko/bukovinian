const menuBtn = document.getElementById('menu');
const menuWrap = document.querySelector('.menu-nav__list');
const searchMobile = document.querySelector('.search-mobile');
const searchMobileInput = document.querySelector('.js-search-input');
const dropDownArrow = document.querySelectorAll('.js-mobile-drop-down');

menuBtn.addEventListener('click', () => {
    menuWrap.style.display === 'flex' ?  
    menuWrap.style.display = 'none' :  
    menuWrap.style.display = 'flex';
});

searchMobile.addEventListener('click', e => {
    !e.target.closest('Input') ?
     searchMobileInput.classList.toggle('display-block'): 
     null;
     searchMobileInput.focus();
})

dropDownArrow.forEach(element => {
    element.addEventListener('click', e => {
    const li =  e.target.closest('li');
    const  list = Array.from(li.children);

    list.forEach(item => {
        if(item.classList.contains('drop-down')) {
            item.style.display === "block" ?  item.style.display = 'none':   item.style.display = 'block'
            return;
        }
    })
    })
});
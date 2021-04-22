const lang = document.getElementById('change-language');
const langMenu = document.getElementById('language-menu');

lang.addEventListener('click', () => {
    langMenu.style.display = 'block';
});

langMenu.addEventListener('click', e => {
    const  list =Array.from(langMenu.children);

    list.forEach(item => {
        item.classList.contains('language-active') ?  item.classList.remove('language-active') : null;
    })

    const langitem = e.target.closest('Li');
    langitem.classList.add('language-active');

   
    Array.from(lang.children).forEach(langText => {
        if(langText.classList.contains('lang-text')) {
            langText.textContent = langitem.textContent;
            return;
        }
    })
});

document.addEventListener('click', e => {
    const langItem = e.target.closest('#change-language');
    if(!langItem){
        langMenu.style.display = 'none';
    }
})
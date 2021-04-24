const newsList = [
    {
        title: 'Naughty',
        date: 'Date:31.01.2021',
        info: 'This Black History Month, Meet the Students whose fearlessness has transformed Carolina for the better and This Black History Month, meet the students for the better and This Black History Month, meet the students. and This Black Histor.',
        imgUrl: '1',
        link: 'link'
    },
    {
        title: 'test',
        date: Date.now(),
        info: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах',
        imgUrl: '2',
        link: 'link'
    },
    {
        title: 'test 2',
        date: Date.now(),
        info: 'This Black History Month, Meet the Students whose fearlessness has transformed Carolina for the better and This Black History Month, meet the students for the better and This Black History Month, meet the students. and This Black Histor.',
        imgUrl: '3',
        link: 'link'
    },
    {
        title: 'test 3',
        date: Date.now(),
        info: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах',
        imgUrl: '4',
        link: 'link'
    }
];

const switchBlocks = document.querySelector('.switch-blocks');

const title = document.querySelector('.js-news-title');
const description = document.querySelector('.js-news-info');
const date = document.querySelector('.js-news-date');
const link = document.querySelector('.js-news-link');
const imageWrap = document.querySelector('.news-block-img');
const imageList= Array.from(imageWrap.children);
removeImgs('1');
switchBlocks.addEventListener('click', e => {
    const  list = Array.from(switchBlocks.children);

    list.forEach(item => {
        if(item.classList.contains('switch-block--active')) {
            item.classList.remove('switch-block--active');
            return;
        }
    })

    const switchItem = e.target.closest('.switch-block');
    switchItem.classList.add('switch-block--active');

    const data = newsList[parseInt(switchItem.getAttribute('data-id'))]

    title.textContent = data.title;
    description.textContent  = data.info;
    date.textContent = data.date;
    removeImgs(data.imgUrl)

    
});

function removeImgs(urlVal) {
    imageList.forEach(item => {
        item.getAttribute('data-img') === urlVal ?   
        item.style.display = 'block' : 
        item.style.display = 'none' ;
    });
}
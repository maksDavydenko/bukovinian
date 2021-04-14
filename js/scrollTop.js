
const btnToTop  = document.getElementById("scrollTop");

document.addEventListener('scroll', e =>{
    if(window.pageYOffset >= 100){
        btnToTop.style.display= 'flex';
        return
    }
    else {
        btnToTop.style.display= 'none'
    }
});

  btnToTop.addEventListener('click', () => {
    window.scrollTo( 0, 0 );
  })
  
  lightGallery(document.getElementById('lightgallery'))


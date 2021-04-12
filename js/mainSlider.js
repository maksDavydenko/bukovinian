$( document ).ready(function() {

$(".js-main-slider").slick({

    // normal options...
    slidesToShow: 1,
    // the magic
    infinite: false,
  autoplay: true,
  dots: true,
  arrows: false
});

$(".slick-dots").wrap("<div class='container'><div class='main-slider__nav-wrap'><div class='main-slider__nav'><div id='next-btn'></div> <div id='prev'></div></div></div>")

})
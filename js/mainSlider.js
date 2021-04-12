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

$(".slick-dots").wrap("<div class='container'><div class='main-slider__inner'><div id='next-btn'>next</div><div id='prev>prev</div></div></div>")

})
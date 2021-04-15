$( document ).ready(function() {

  $(".js-main-slider").slick({
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      dots: true,
      arrows: false,
  });

  $( ".slick-dots" ).wrap('<div class="main-slider__nav"></div>')
  $( ".main-slider__nav" ).prepend( '<div class="controls-btn upBtn"><img src="./img/icons/arrowUpBlue.svg" alt="up"></div>' );
  $( ".main-slider__nav" ).append( '<div class="controls-btn downBtn"><img src="./img/icons/arrowDownBlue.svg" alt="up"></div>');

  $('.upBtn').on('click', function () {
    $('.js-main-slider').slick('slickPrev');
  });

  $('.downBtn').on('click', function () {
    $('.js-main-slider').slick('slickNext');

  });
  $( ".main-slider__inner" ).append($('.main-slider__nav'));
})
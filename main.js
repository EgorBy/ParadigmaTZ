$(document).ready(function() {
  $('.header-top__watch-on-map').hover(function() {
    $('.map-modal').addClass('active');

    // Создание iframe с Yandex Maps
    var map = $('<iframe>').attr('width', '100%')
                          .attr('height', '100%')
                          .attr('frameborder', '0')
                          .attr('style', 'border:0')
                          .attr('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A9d2c92' +
                                  '408ad3e485766970307c39bb1ed1549db83eaf662a880946db0e80969b&amp;s' +
                                  'ource=constructor');
    // Вставка iframe в контейнер карты
    $('.map-modal').html(map);
  }, function() {
    // Удаление iframe при выходе курсора из контейнера
    $('.map-modal').html('');
    $('.map-modal').removeClass('active');
  });

  $('.header-top__burder').on('click', function() {
    $('.page__wrapper').toggleClass('open-burger');
    $('.header-nav').toggleClass('desktop-only');
  
    if ( $('.page__wrapper').hasClass('open-burger')) {
      $('.header-top__burder img').attr('src', 'img/burger-black.svg');
    } else {
      $('.header-top__burder img').attr('src', 'img/burger.svg');
    }
  });
  
  if ($(window).width() <= 425) {
    $('.header').addClass('header-fixed');
  }

  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();

    if ($(window).width() <= 425) {
      if (scrollPosition > 1) {
        $('.header-fixed').css('background-color', 'white');
        $('.header-top__contacts-work-hours, .header-top__contacts-telephone-for-call,' +
        '.header-top__contacts-call-request').css('color', 'black');
        $('.header-top__burder img').attr('src', 'img/burger-black.svg');
      } else {
        
        $('.header-top__contacts-work-hours, .header-top__contacts-telephone-for-call,' +
         '.header-top__contacts-call-request').css('color', 'white');
        $('.header-fixed').css('background-color', 'transparent');
        if ( !$('.page__wrapper').hasClass('open-burger')) {
          $('.header-top__burder img').attr('src', 'img/burger.svg');
        }
      }
    }
  });
});
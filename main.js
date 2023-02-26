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


    // при изменении состояния чекбокса, устанавливаем значение атрибута disabled для кнопки отправки формы
  $('#agreement').change(function() {
    if($(this).is(':checked')) {
      $('button[type="submit"]').prop('disabled', false);
      $(this).parent().addClass('checked');
    } else {
      $('button[type="submit"]').prop('disabled', true);
      $(this).parent().removeClass('checked');
    }
  });

  $('.header-top__contacts-call-request').on('click', function() {
    $('.popup').addClass('open');
  });

  $('.popup__close').on('click', () => {
    $('.popup').removeClass('open');
  });


  $('.header-top__burger').on('click', function() {
    $('.page__wrapper').toggleClass('open-burger');
    $('.header-nav').toggleClass('desktop-only');
    $('html, body').scrollTop(0);

    if (!$('.page__wrapper').hasClass('open-burger')) {
      $('.header-top__burger img').attr('src', 'img/burger.svg');
      $('.header-fixed').css('background-color', 'transparent');
    } else {
      $('.header-top__burger img').attr('src', 'img/burger-black.svg');
    }
  });
  
  if ($(window).width() <= 425) {
      $('.header-top').addClass('header-fixed');
  }

  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();

    if ($(window).width() <= 425) {
      if (scrollPosition > 1) {
        $('.header-fixed').css('background-color', 'white');
        $('.header-top__contacts-work-hours, .header-top__contacts-telephone-for-call,' +
        '.header-top__contacts-call-request').css('color', 'black');
        $('.header-top__burger img').attr('src', 'img/burger-black.svg');
      } else {
        $('.header-top__contacts-work-hours, .header-top__contacts-telephone-for-call,' +
         '.header-top__contacts-call-request').css('color', 'white');
        $('.header-fixed').css('background-color', 'transparent');
        if ( !$('.page__wrapper').hasClass('open-burger')) {
          $('.header-top__burger img').attr('src', 'img/burger.svg');
        }
      }
    }
  });
});



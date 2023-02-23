$(document).ready(function() {
  $('.top-header__watch-on-map').hover(function() {
    $('.map-modal').addClass('active');

    // Создание iframe с Google Maps
    var map = $('<iframe>')
      .attr('width', '500')
      .attr('height', '400')
      .attr('frameborder', '0')
      .attr('style', 'border:0')
      .attr('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A9d2c92408ad3e485766970307c39bb1ed1549db83eaf662a880946db0e80969b&amp;source=constructor');

    // Вставка iframe в контейнер карты
    $('.map-modal').html(map);
  }, function() {
    // Удаление iframe при выходе курсора из контейнера
    $('.map-modal').html('');
    $('.map-modal').removeClass('active');
  });
});
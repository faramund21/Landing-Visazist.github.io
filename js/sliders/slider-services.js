const servicesswiper = new Swiper('.services__swiper', {
  // Optional parameters
  direction: 'horizontal', // 'vertical',
  loop: true,
  speed: 1000,
  // effect: 'cube', 'cards', 'flip', 'fade', 'coverflow',
  // initialSlide: 1, // НАчинаем со второго слайда
  // freeMode: true, Можно перетаскивать как ленту
  // slidesPerView: 2, // Количество активных слайдов
  // centeredSlides: true, // Центрирование слайдов

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Автоматическое перелистование

  autoplay: {
    delay: 1500, // 1с = 1000
  },

  // And if we need scrollbar
  // scrollbar: {
    // el: '.swiper-scrollbar',
  // },
});

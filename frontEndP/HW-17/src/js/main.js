import Swiper, {
   Navigation,
   Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.swiper', {
   slidesPerView: 3,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
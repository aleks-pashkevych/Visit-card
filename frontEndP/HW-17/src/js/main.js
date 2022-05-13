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


//Modal

const modalTrigger = document.querySelectorAll('.modal-btn');
const modalWindow = document.querySelector('.modal');

modalTrigger.forEach(element => {
   element.addEventListener('click', (event) => {
      modalWindow.classList.add('show');
      modalWindow.classList.remove('hide');
      document.body.style.overflow = 'hidden';
   });
});

modalWindow.addEventListener('click', (event) => {
   modalWindow.classList.add('hide');
   modalWindow.classList.remove('show');
   document.body.style.overflow = '';
});
import _ from 'lodash';
import {
   moduleObj1
} from './modules/module1';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

console.log(moduleObj1);
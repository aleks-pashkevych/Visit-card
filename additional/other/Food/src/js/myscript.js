/*jshint esversion: 9 */
/* jslint node: true */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
   //!             ---== Tabs ==---
   const tabs = document.querySelectorAll('.tabheader__item');
   const tabContent = document.querySelectorAll('.tabcontent');
   const tabParent = document.querySelector('.tabcontainer');


   function hideTabContent() {
      tabContent.forEach(item => {
         item.classList.add("hide");
         item.classList.remove("show", "fade");
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(currentTab = 0) {
      tabContent[currentTab].classList.add("show", "fade");
      tabContent[currentTab].classList.remove("hide");
      tabs[currentTab].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   tabParent.addEventListener('click', (event) => {
      event.preventDefault();

      const target = event.target;
      if (target && target.classList.contains('tabheader__item')) {
         hideTabContent();
         tabs.forEach((item, i) => {
            if (item == target) {
               hideTabContent();
               showTabContent(i);

            }
         });
      }
   });
   //!                  ---== Timer ==---

   const deadLine = '2022-05-20';

   function getTimeRemaining(endTime) {
      const currentTime = new Date();
      let timeToEnd = Date.parse(endTime) - currentTime;

      let daysLeft = addZero(Math.floor(timeToEnd / (1000 * 60 * 60 * 24)));
      let hoursLeft = addZero(Math.floor((timeToEnd / (1000 * 60 * 60)) % 24));
      let minsToEnd = addZero(Math.floor((timeToEnd / (1000 * 60)) % (60)));
      let secondsLeft = addZero(Math.floor((timeToEnd / 1000) % 60));

      function addZero(input) {
         if (input >= 0 && input < 10) {
            return ("0" + input);
         } else {
            return input;
         }
      }



      return {
         'total': timeToEnd,
         'days': daysLeft,
         'hours': hoursLeft,
         'minutes': minsToEnd,
         'seconds': secondsLeft,
      }
   }

   function setClock(selector, endTime) {
      const timer = document.querySelector(selector);

      const days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);
      updateClock();

      function updateClock() {
         const timeTillEnd = getTimeRemaining(endTime);

         days.innerHTML = timeTillEnd.days;
         hours.innerHTML = timeTillEnd.hours;
         minutes.innerHTML = timeTillEnd.minutes;
         seconds.innerHTML = timeTillEnd.seconds;

         if (timeTillEnd.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }
   setClock('.timer', deadLine);


   //!                   ---== Modal ==---

   const modalTrigger = document.querySelectorAll('[data-modal]');
   const modal = document.querySelector('.modal');
   const modalCloseBtn = document.querySelector('[data-close');

   function openModal() {
      modal.classList.add('show', 'fade');
      modal.classList.remove('hide');
      document.body.style.overflow = "hidden";
      clearInterval(modalTimerId);
   }

   modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   const modalTimerId = setTimeout(openModal, 30000);

   let wasShowed = false;

   window.addEventListener('scroll', () => {
      if ((window.pageYOffset + document.documentElement.clientHeight >= 
         document.documentElement.scrollHeight - 1) && !wasShowed) {
          openModal();
          wasShowed = true;
          console.log("was showed: " + wasShowed);
          
      }
   });
   

   modalCloseBtn.addEventListener('click', closeModalForm);

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains("show")) {
         closeModalForm();
      }
   });

   modal.addEventListener('click', (event) => {
      if (event.target === modal) {
         closeModalForm();
      }
   });

   function closeModalForm() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = "";
   }

   const callMeBtn = document.querySelector('[data-callMeModal');
   const modalName = document.querySelector('[data-modalInputName');
   const modalPhone = document.querySelector('[data-modalInputPhone]');

   callMeBtn.addEventListener('click', () => {
      const name = modalName.value;
      const phone = modalPhone.value;
      console.dir("name: " + name + ", " + "phone: " + phone);

   });

});
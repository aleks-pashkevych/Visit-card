/*jshint esversion: 9 */
/* jslint node: true */
'use strict';

   document.addEventListener('DOMContentLoaded', () => {
      console.log("web page started");
   

      //!             ---== Tabs ==---
      const tabs = document.querySelectorAll('.tabheader__item');
      const tabContent = document.querySelectorAll('.tabcontent');
      const tabParent = document.querySelector('.tabcontainer');


   function hideTabContent() {
      tabContent.forEach(item => {
         item.classList.add("hide");
         item.classList.remove("show","fade");
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

   tabParent.addEventListener('click', (event) =>{
      event.preventDefault();

      const target = event.target;
      if (target && target.classList.contains('tabheader__item')) {
         hideTabContent();
         tabs.forEach((item,i) => {
            if (item == target){
               hideTabContent();
               showTabContent(i);
               
            }
         });
      }
   });
//!                  ---== Timer ==---


});
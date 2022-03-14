/*jshint esversion: 9 */
/* jslint node: true */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
console.log("web page started");

const tabs = document.querySelectorAll('.tabheader__items');
const tabContent = document.querySelectorAll('.tabcontent');
const tabParent  = document.querySelector('.tabcontainer');

function hideTabContent(){
   tabContent.forEach(item => {
      console.log(item+ ";");
      item.style.display = "none";
   });

   tabs.forEach(item => {
      console.log(item);
      item.classList.remove('tabheader__item_active');
   });
}

function  showTabContent (currentTab) {
   tabContent[currentTab].style.display = "block";
   tabs[currentTab].style.add('tabheader__item_active');
}

hideTabContent();
showTabContent(0);
});
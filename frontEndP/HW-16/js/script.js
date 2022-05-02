/*jshint esversion: 9 */
/* jslint node: true */
"use strict";


const spriteEl = document.querySelector('#sprites');
const seedEl = document.querySelector('#seed');
const colorEl = document.querySelector('#color');
const iconEl = document.querySelector('#icon');
const iconDiv = document.querySelector('.right');
const button = document.querySelector('#download-btn');

let spriteIsOk = false;
let sprite = spriteEl.value;
let seed = seedEl.value;
let color = 'white';


function setImage(iconUrl) {
   iconEl.remove();
   iconEl.src = iconUrl;
   console.log(iconUrl);
   iconDiv.append(iconEl);
}


colorEl.addEventListener('change', (event) => {
   color = (`%23${(event.target.value).substring(1)}`);
   setImage(`https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${color}`);
});
spriteEl.addEventListener('change', (event) => {
   sprite = event.target.value;
   if (sprite != "") {
      setImage(`https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${color}`);
   } else {
      spriteEl.classlist.add("error");
   }
});
seedEl.addEventListener('change', (event) => {
   if (spriteEl.value != "") {
      seed = event.target.value;
      setImage(`https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${color}`);
   } else {
      spriteEl.classlist.add("error");
   }
});
button.addEventListener('click', (event) => {
   event.preventDefault();
   console.log(iconEl.src);
   downLoad(iconEl.src, `${seed}.svg`);
});

function downLoad(iconUrl, fileName) {
   var a = document.createElement("a");
   a.href = iconUrl;
   a.setAttribute("download", fileName);
   a.click();
   return false;
}
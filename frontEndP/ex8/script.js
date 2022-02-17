/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

const listArr = [{
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   },
   {
      title: 'Lorem ipsum dolor 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   },
   {
      title: 'Lorem ipsum dolor 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   },
   {
      title: 'Lorem ipsum dolor 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   },
   {
      title: 'Lorem ipsum dolor 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   },
   {
      title: 'Lorem ipsum dolor 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
   }
];

const body = document.querySelector("body");
const listWrapper = document.createElement("div");
const list = document.createElement("ul");

body.append(listWrapper);
listWrapper.appendChild(list);

for (let i = 0; i < listArr.length; i++) {
   let listItem = document.createElement("li");
   let head = document.createElement("h1");
   let text = document.createElement('p');
   list.appendChild(listItem);
   let headText = listArr[i].title;
   let txt = listArr[i].text;
   listItem.append(head);
   head.innerText = headText;
   listItem.append(text);
   text.innerText = txt;
}

const lists = document.querySelectorAll("li");
for (let i = 0; i < lists.length; i++) {
   lists[i].style.backgroundColor = setColour();
}

function setColour() {
   let outValue = "rgb(" + Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + ")";
   return outValue;
}
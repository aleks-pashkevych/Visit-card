/*jshint esversion: 9 */
/* jslint node: true */
"use strict";


const scene = document.querySelector('.scene');
const sceneContainer = document.querySelector('.scene-container');
const ball = document.querySelector('.ball');
const sceneRect = scene.getBoundingClientRect();
const sceneContainerRect = sceneContainer.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

scene.addEventListener('mousemove', function (e) {
   if (!ballActive) return;
   const {
      clientX,
      clientY
   } = e;
   const left = clientX - BORDER_WIDTH - sceneRect.left - ballRect.width / 2;
   const top = clientY - BORDER_WIDTH - sceneRect.top - ballRect.height / 2;

   if (left <= 0) return;
   if (clientX >= (sceneRect.right - BORDER_WIDTH - ballRect.width / 2)) return;
   if (top <= 0) return;
   if (clientY >= (sceneRect.bottom - BORDER_WIDTH - ballRect.height / 2)) return;

   ball.style.transform = `translate(${left}px, ${top}px`;
});

ball.addEventListener("click", () => {
   ballActive = !ballActive;
});


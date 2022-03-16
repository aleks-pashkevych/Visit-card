/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

function Slider({
  wrapperId,
  itemsId,
  prevId,
  nextId,
  slides
}) {
  this.wrapperEl = document.getElementById(wrapperId);
  this.itemsEl = document.getElementById(itemsId);
  this.slidesLength = slides.length;

  this.prevEl = document.getElementById(prevId);
  this.nextEl = document.getElementById(nextId);
  this.currentIndex = 0;

  const {
    width: wrapperWidth
  } = this.wrapperEl.getBoundingClientRect();
  this.itemsEl.style.width = `${this.slidesLength * wrapperWidth}px`;

  const createSlides = () => {
    slides.forEach((item) => {
      const slide = document.createElement("div");
      slide.style.backgroundImage = `url(${item.src})`;
      slide.classList.add("slide");

      const overlay = document.createElement("div");
      overlay.innerText = item.description;
      overlay.classList.add("slide-overlay");

      slide.appendChild(overlay);

      this.itemsEl.appendChild(slide);
    });
  };
  createSlides();
  this.prevEl.addEventListener("click", (e) =>{
    console.log("prev: " + e.target);
  });

  this.nextEl.addEventListener("click", (e) =>{
    console.log("next: " + e.target);
  });

}

const slides = [{
    description: "Test slide 1",
    src: "https://via.placeholder.com/600X400",
  },
  {
    description: "Test slide 2",
    src: "https://via.placeholder.com/600X400",
  },
  {
    description: "Test slide 3",
    src: "https://via.placeholder.com/600X400",
  },
  {
    description: "Test slide 4",
    src: "https://via.placeholder.com/600X400",
  },
  {
    description: "Test slide 5",
    src: "https://via.placeholder.com/600X400",
  },
];

const slider = new Slider({
  wrapperId: "wrapper-slides",
  itemsId: "slides",
  prevId: "prev",
  nextId: "next",
  slides,
});
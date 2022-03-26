/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

function Slider({
  wrapperId,
  itemsId,
  prevId,
  nextId,
  paginationId,
  slides
}) {
  this.wrapperEl = document.getElementById(wrapperId);
  this.itemsEl = document.getElementById(itemsId);
  this.slidesLength = slides.length;

  this.prevEl = document.getElementById(prevId);
  this.nextEl = document.getElementById(nextId);
  this.paginationEl = document.getElementById(paginationId);
  this.currentIndex = 0;

  const {
    width: wrapperWidth
  } = this.wrapperEl.getBoundingClientRect();
  this.itemsEl.style.width = `${this.slidesLength * wrapperWidth}px`;

  const createSlides = () => {
    slides.forEach((item, i) => {
      const slide = document.createElement("div");
      slide.style.backgroundImage = `url(${item.src})`;
      slide.classList.add("slide");

      const overlay = document.createElement("div");
      overlay.innerText = item.description;
      overlay.classList.add("slide-overlay");

      const paginationEl = document.createElement("div");
      paginationEl.classList.add("pagination-item");
      paginationEl.innerText = i + 1;
      paginationEl.dataset.index = i;
      if (i == 0) {
        paginationEl.classList.add('active');
      }
      slide.appendChild(overlay);

      this.itemsEl.appendChild(slide);
      this.paginationEl.appendChild(paginationEl);
    });
  };
  createSlides();

  this.moveToIndex = function (index) {
    if (index < 0) {
      this.currentIndex = 0;
    } else if (index > slides.length - 1) {
      this.currentIndex = slides.length - 1;
    } else {
      this.currentIndex = index;
    }
    const posX = this.currentIndex * wrapperWidth;
    this.itemsEl.classList.add('transition');
    this.itemsEl.style.transform = `translate(${-posX}px, 0`;

    const paginationItemsCollection = document.querySelectorAll('.pagination-item');
    paginationItemsCollection.forEach(elem => {
      elem.classList.remove('active');
    });
    paginationItemsCollection[this.currentIndex].classList.add('active');
  };

  this.prevEl.addEventListener("click", (e) => {
    this.moveToIndex(this.currentIndex - 1);
  });

  this.nextEl.addEventListener("click", (e) => {
    this.moveToIndex(this.currentIndex + 1);
  });
  this.itemsEl.addEventListener('transitionend', (e) => {
    this.itemsEl.classList.remove('transition');
  });

  //?   DRAWING 
  let isDrawing = false;
  const leftThreshold = 100;
  const rightThreshold = -100;
  let startDrawPosX = 0;
  this.itemsEl.addEventListener('pointerdown', (e) => {
    isDrawing = true;
    startDrawPosX = e.clientX;
  });
  this.itemsEl.addEventListener('pointermove', (e) => {
    if (!isDrawing) {
      return;
    }
    const diffX = startDrawPosX - e.clientX;
    if (diffX > leftThreshold) {
      this.moveToIndex(this.currentIndex + 1);
      isDrawing = false;
    }
    if (diffX < rightThreshold) {
      this.moveToIndex(this.currentIndex - 1);
      isDrawing = false;
    }
  });
  this.itemsEl.addEventListener('pointerup', (e) => {
    isDrawing = false;
  });
  this.itemsEl.addEventListener('pointerleave', (e) => {
    if (!isDrawing) {
      return;
    }
    if (this.diffX > leftThreshold) {
      this.moveToIndex(this.currentIndex + 1);
      isDrawing = false;
    }
    if (this.diffX < rightThreshold) {
      this.moveToIndex(this.currentIndex - 1);
      isDrawing = false;
    }
  });

  //?   PAGINATION
  this.paginationEl.addEventListener('click', (e) => {
    const el = e.target;
    if (e.target.classList.contains('pagination-item')) {
      const index = +el.dataset.index;
      this.moveToIndex(index);
    }
  });

  //&   KEYBOARD
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowRight':
        this.moveToIndex(this.currentIndex + 1);
        break;

      case 'ArrowLeft':
        this.moveToIndex(this.currentIndex - 1);
        break;

      case 'ArrowDown':
        this.moveToIndex(slides.length - 1);
        break;

      case 'ArrowUp':
        this.moveToIndex(0);
        break;
    }

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
  paginationId: "pagination",
  slides,
});
/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

const shape = {
   height: 10,
   width: 20,
   radius: 15,
};

Square.prototype = shape;
Rectangle.prototype = shape;
Circle.prototype = shape;

function Square() {
   this.height = Square.prototype.height;
   this.square = function () {
      return this.height ** 2;
   };
   this.setHeight = function (height) {
      this.height = height;
   };
}

const mySquare = new Square();
console.log(mySquare.square());
mySquare.setHeight(5);
console.log(mySquare.square());

function Rectangle(value = [4, 8]) {
   this.value = value;
   if (this.value.length == 2) {
      this.height = this.value[0];
      this.width = this.value[1];
   } else if (Array.isArray(this.value) == false) {
      throw "Value should be array."
   } else if (this.value.length != 2) {
      throw "array length should be 2"
   }
   this.square = function () {
      return this.height * this.width;
   };
   this.setHeight = function (height) {
      this.height = height;
   };
   this.setWidth = function (width) {
      this.width = width;
   };
}

const myRectangle = new Rectangle([5, 2]);
console.log(myRectangle.square());
myRectangle.setHeight(12);
myRectangle.setWidth(8);
console.log(myRectangle.square());

const rectangleWithoutInitials = new Rectangle();
console.log(rectangleWithoutInitials.square());

const wrongRectangle = new Rectangle([5]);
console.log(wrongRectangle.square());

function Circle() {
   this.radius = Circle.prototype.radius;
   this.square = function () {
      return Math.PI * this.radius ** 2;
   };
   this.setRadius = function (radius) {
      this.radius = radius;
   };
}

const myCircle = new Circle();
console.log(myCircle.square());
myCircle.setRadius(7);
console.log(myCircle.square());
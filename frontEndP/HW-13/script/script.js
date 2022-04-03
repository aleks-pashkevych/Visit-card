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
   this.square = function() {
      return this.height ** 2;
   };
   this.setHeight = function(height){
      this.height = height;
   };
}

const mySquare = new Square();
console.log(mySquare.square());
mySquare.setHeight(5);
console.log(mySquare.square());

function Rectangle() {
   this.height = Rectangle.prototype.height;
   this.width = Rectangle.prototype.width;
   
   this.square = function() {
      return this.height * this.width;
   };
   this.setHeight = function(height) {
      this.height = height;
   };
   this.setWidth = function(width) {
      this.width = width;
   };
}

const myRectangle = new Rectangle()
console.log(myRectangle.square());
myRectangle.setHeight(12);
myRectangle.setWidth(8);
console.log(myRectangle.square());

function Circle() {
   this.radius = Circle.prototype.radius;
   this.square = function(){
   return Math.PI * this.radius ** 2;
   };
   this.setRadius = function(radius) {
      this.radius = radius;
   };
}

const myCircle = new Circle();
console.log(myCircle.square());
myCircle.setRadius(7);
console.log(myCircle.square());
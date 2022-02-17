/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

function Calculator() {

   this.numberOfCallingSum = 0;
   this.numberOfCallingSubtract = 0;
   this.numberOfCallingPow = 0;
   this.numberOfCallingMultiply = 0;
   this.numberOfCallingDivide = 0;

   const lastOperation = {};

   this.sum = function (a, b) {
      let result = a + b;
      this.numberOfCallingSum++;
      this.clearLastOperation();
      this.addElementToLastOperation("sum", result);
      return result;
   };
   this.subtract = function (a, b) {
      let result = a - b;
      this.numberOfCallingSubtract++;
      this.clearLastOperation();
      this.addElementToLastOperation("subtract", result);
      return result;
   };
   this.pow = function (a, b) {
      let result = a ** b;
      this.numberOfCallingPow++;
      this.clearLastOperation();
      this.addElementToLastOperation("pow", result);
      return result;
   };
   this.multiply = function (a, b) {
      let result = a * b;
      this.numberOfCallingMultiply++;
      this.clearLastOperation();
      this.addElementToLastOperation("multiply", result);
      return result;
   };
   this.divide = function (a, b) {
      let result = a / b;
      this.numberOfCallingDivide++;
      this.clearLastOperation();
      this.addElementToLastOperation("divide", result);
      return result;
   };

   this.getMethodCallCount = function (methodToCheck) {
      let result = 0;
      switch (methodToCheck) {
         case ("sum"):
            result = this.numberOfCallingSum;
            break;
         case ("subtract"):
            result = this.numberOfCallingSubtract;
            break;
         case ("pow"):
            result = this.numberOfCallingPow;
            break;
         case ("multiply"):
            result = this.numberOfCallingMultiply;
            break;
         case ("divide"):
            result = this.numberOfCallingDivide;
            break;
         default:
            return "Unknown method: " + methodToCheck;
      }
      return result;
   };

   this.clearLastOperation = function () {
      for (let key in lastOperation) {
         delete lastOperation[key];
      }
   };

   this.addElementToLastOperation = function (key, value) {
      lastOperation[key] = value;
   };
   this.getLastOperation = function () {
      let lastOperationKey = Object.keys(lastOperation);
      let lastOperationValue = lastOperation[lastOperationKey];

      return "Method: '" + lastOperationKey + "' result = " + lastOperationValue;
   };
   this.getLastOperationObject = function () {
      return lastOperation;
   };
}
const calculator = new Calculator();

console.log(calculator.sum(5, 10));
console.log(calculator.sum(6, 12));
console.log(calculator.subtract(10, 5));
console.log(calculator.subtract(20, 7));

console.log(calculator.pow(4, 2));
console.log(calculator.pow(2, 3));
console.log(calculator.pow(100, 2));

console.log(calculator.multiply(2, 3));
console.log(calculator.multiply(5, 8));

console.log(calculator.divide(16, 2));
console.log(calculator.divide(10, 5));

console.log(calculator.multiply(5, 16));
console.log(calculator.sum(5, 35));
console.log(calculator.multiply(7, 14));

console.log("Sum: " + calculator.numberOfCallingSum);
console.log("Method Sum: " + calculator.getMethodCallCount("sum"));
console.log("Pow: " + calculator.getMethodCallCount("pow"));
console.log("Multiply: " + calculator.getMethodCallCount("multiply"));
console.log("Divide: " + calculator.getMethodCallCount("divide"));

console.log(calculator.getLastOperation());
console.log(calculator.getLastOperationObject());
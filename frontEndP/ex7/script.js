/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

const resultArray = removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]);

const revertedStr = revertedString('laptop');

const matrixArr = createMatrix(3, 4);

console.log(resultArray);
console.log(revertedStr);
console.log(matrixArr);

function removeDuplicates(initArray) {
   let outputArr = [...new Set(initArray)];
   outputArr.sort();
   return outputArr;
}

function revertedString(str) {
   let outputArr = [];
   for (let i = str.length - 1; i >= 0; i--) {
      outputArr.push(str[i]);
   }
   return outputArr.join("");
}

function createMatrix(n, m) {
   let outArr = [];
   let value = 1;
   for (let i = 0; i < n; i++) {
      outArr.push(createArray(value, m));
      value = value + m;
   }
   return outArr;
}

function createArray(firstValue, arrLength) {
   let arr = [];
   for (let i = firstValue; i < (arrLength + firstValue); i++) {
      arr.push(i);
   }
   return arr;
}
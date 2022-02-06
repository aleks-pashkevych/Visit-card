/*jshint esversion: 9 */
/*jslint node: true */
"use strict";
// ! -- Getting line for Palindrom check --
const lineToCheck = getLineFromPrompt();
console.log("Entered line: " + lineToCheck);

// ! -- Task 1 (Palindrom) --
let ifPalindrom = isPalindrom();
console.log(ifPalindrom);

// ! -- Task2 ( String N times) -- 
console.log(repeat());
console.log(repeat("myString", 5));

// ! -- Task3 (Call Back) --
console.log(operation(2, 4, summary));

function getLineFromPrompt() {
   let inputLine = prompt("Please enter your line:");

   if (inputLine.length > 0) {
      return inputLine;
   }
   return "level";
}

// * Task1
function isPalindrom() {
   let lineLength = lineToCheck.length;
   let firstPartOfLine = "",
      lastPartOfLine = "";

   if (lineLength % 2 == 0) {
      for (let i = 0; i < lineLength / 2; i++) {
         firstPartOfLine = firstPartOfLine + lineToCheck[i];
         firstPartOfLine = firstPartOfLine.toLowerCase();
      }
      for (let i = lineLength - 1; i > lineLength / 2 - 1; i--) {
         lastPartOfLine = lastPartOfLine + lineToCheck[i];
         lastPartOfLine = lastPartOfLine.toLowerCase();
      }
      if (firstPartOfLine == lastPartOfLine) {
         return true;
      }
   } else {
      for (let i = 0; i < lineLength / 2 - 1; i++) {
         firstPartOfLine = firstPartOfLine + lineToCheck[i];
         firstPartOfLine = firstPartOfLine.toLowerCase();
      }
      for (let i = lineLength - 1; i > lineLength / 2; i--) {
         lastPartOfLine = lastPartOfLine + lineToCheck[i];
         lastPartOfLine = lastPartOfLine.toLowerCase();
      }
      if (firstPartOfLine == lastPartOfLine) {
         return true;
      }
   }
   return false;
}

// * Task2
function repeat (str="", n=2) {
   let outputStr = str;
   for(let i=1; i<n; i++){
      
      outputStr = outputStr + ", " + str;
   }
   return outputStr;
}

// * Task3
function operation(a, b, sumCallback) {
   let exponent = 2;
   return (sumCallback(Math.pow(a, exponent), Math.pow(b, exponent)));
}

function summary(x, y) {
   return (x+y);
}
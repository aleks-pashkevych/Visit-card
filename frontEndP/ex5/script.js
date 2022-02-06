/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

let stringLength = Math.floor(Math.random() * 6);
let generatedString = getRandomString(stringLength);
console.log("Number: " + stringLength);
const obj = generateObject(generatedString);
console.log(obj);
let resultString = getStringFromObject(obj);
console.log("Output String:" + resultString);

function generateObject(str) {
  let strLength = str.length;
  let initialString = "laptop";
  let outputString = "";
  if (strLength >= initialString.length) {
    strLength = 3;
  }
  str = new Object;

  for (let i = 0; i < strLength; i++) {
    outputString = outputString + initialString[i];    
  }
  let key = "value",
  value = outputString;
  str[key] = value;
  return str;
}

function getStringFromObject(obj) {
  let value = "";
  for (let key in obj) {
value = obj[key];
  }
  return value;
}

function getRandomString(length) {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length),
    );
  }
  return result;
}
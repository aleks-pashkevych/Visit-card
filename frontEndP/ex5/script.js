/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

let stringLength = Math.floor(Math.random() * 6);
let generatedString = getRandomString(stringLength);
const obj = generateObject(generatedString);
console.log(obj);
let resultString = getStringFromObject(obj);
console.log("Output String:" + resultString);

function generateObject(str) {
  let strLength = str.length;
  let initialString = getInitialString();
  let outputString = "";
  if (strLength >= initialString.length || strLength == 0) {
    strLength = 3;
  }
  str = new Object();
  let key = "";
  let value = "";
  for (let i = 0; i < strLength; i++) {
    outputString = outputString + initialString[i];
    value = outputString;
    key = getRandomString(strLength);
    str[key] = value;
  }
  return str;
}

function getStringFromObject(obj) {
  let value = "";
  for (let key in obj) {
    value = value + obj[key] + ", ";
  }
  return value;
}

function getInitialString() {
  let initString = prompt("Enter at at least 6 characters: ");
  let strLength = Math.floor(Math.random() * 10 + 5);
  console.log("initString: " + initString);
  if (initString === null) {
    initString = getRandomString(strLength);
  } else if (initString.length > 5) {
    return initString;
  } else {
    initString = getRandomString(strLength);
  }
  console.log("Result string: " + initString);
  return initString;
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
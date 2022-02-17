/*jshint esversion: 6 */
"use strict";

let curentUser = prompt("Please enter your name");
let userDateOfBirth = +prompt("Please enter your date of birth");
let currentYear = 2022;
let userAge = currentYear - userDateOfBirth;

let messageIndex = "";
let outputMessage = "";
let isDataCorrect = true;

let userAgeIndex = 0;

if (userAge > 1000) {
   let ageStr = userAge + "";
   userAgeIndex = parseInt(ageStr[ageStr.length-2]+ ageStr[ageStr.length-1]);
} else {
   userAgeIndex = userAge;
}
console.log("index: " + userAgeIndex);
console.log("Date of birth: "+ userDateOfBirth);
if (userAgeIndex == 0){
   messageIndex = " год";
} else if (userAgeIndex == 1) {
   messageIndex = " год";
} else if (userAgeIndex > 1 && userAgeIndex < 5) {
   messageIndex = " годa";
} else if (userAgeIndex > 4 && userAgeIndex < 21) {
   messageIndex = " лет";
}
if (userAgeIndex > 20 && userAgeIndex % 10 == 1) {
   messageIndex = " год";
} else if (userAgeIndex > 20 && userAgeIndex % 10 > 1 && userAgeIndex % 10 < 5) {
   messageIndex = " годa";
} else if (userAgeIndex > 20 && userAgeIndex % 10 > 4 && userAgeIndex % 10 < 21) {
   messageIndex = " лет";
} else if (userAgeIndex % 10 == 0) {
   messageIndex = " лет";
}
outputMessage = "Здравствуйте " + curentUser + ", вам " + userAge + messageIndex + "?";

confirm(outputMessage);
/*jshint esversion: 6 */


// ! task1
let incomeNumbers = prompt("Please enter your data:");
let outputString = "";

for (let i = 0; i < incomeNumbers.length; i++) {

   if (+incomeNumbers[i] % 2 == 0) {
      outputString = outputString + incomeNumbers[i] + ", ";
   }
}
console.log(outputString);

// ! task2

let firstInt = Math.floor(Math.random() * 10);
let seckondInt = Math.floor(Math.random() * 10);
let correctResult = firstInt + seckondInt;

let unsweredResult = +prompt("Какая сумма выражения: " + firstInt + " + " + seckondInt);

while (unsweredResult != correctResult) {
   unsweredResult = +prompt("К сожалению вы ответили не верно, попробуйте еще раз:" + firstInt + " + " + seckondInt);
}
if (unsweredResult == correctResult) {
   alert("Поздравляю, вы истинный математик!");
}

// ! task 3

let inputMinutes = +prompt("Enter data from 1 to 60");
while (inputMinutes < 0 || inputMinutes > 60) {
   inputMinutes = +prompt("Sorry you entered wrong data, please try again (from 0 to 60): ");
}
let inputQuoter = null;
if (inputMinutes < 16) {
   inputQuoter = 1;
} else if (inputMinutes < 31) {
   inputQuoter = 2;
} else if (inputMinutes < 46) {
   inputQuoter = 3;
} else if (inputMinutes < 61) {
   inputQuoter = 4;
} else {
   console.log(" input error: " + inputMinutes);
}
switch (inputQuoter) {
   case 1:
      alert("Первая четверть!");
      break;
   case 2:
      alert("Вторая четверть!");
      break;

   case 3:
      alert("Третья четверть!");
      break;

   case 4:
      alert("Четвертая четверть!");
      break;

   default:
      alert("Sorry something went wrong");


}
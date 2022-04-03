/*jshint esversion: 9 */
/* jslint node: true */
"use strict";
function makeString(str) {
   let output = str;
   console.log("Output: " + output);
   function inner (other) {
      output +=  output + " " + other;
      console.log("out" +output);
      return inner;
   }
   return output + inner;
   }
// console.log(makeSrting('Hello')('world')); // --> 'Hello world'
// makeSrting('Test')('super')('test'); // --> 'Test super test'
let str = makeString('Hello')('world');
console.log(str);
str = makeString('Test')('super')('test');
console.log(str);


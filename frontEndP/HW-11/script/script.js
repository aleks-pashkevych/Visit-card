/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

//*   1)  array sum

function getSum(arr) {
   function innerSum(arr, arraySum) {
      if (arr.length === 0) {
         return +arraySum;
      }
      if (Array.isArray(arr[arr.length - 1])) {         
         arraySum += +innerSum(arr[arr.length - 1], arraySum);
         arr.pop();
      }
      console.log(`arrS = ${arraySum} + Value = ${arr[arr.length-1]}`);
       return innerSum(arr, arraySum += +arr.pop());
   }
   let arraySum = innerSum(arr,0);
   return arraySum;
}
console.log(getSum([1, 2, 3, [4, 5, 6], 7, 8]));

console.log(getSum([1, [2, [3]]]));

console.log("-------------------------------------------------");

//*      2)  function "contains"

function contains(obj, val) {
   let result = false;

   for (let key in obj) {
      if (typeof (obj[key]) === 'object' && typeof (obj[key]) != null) {
         return contains(obj[key], val);
      } else if (obj[key] == val) {
         result = true;
      }
   }
   return result;
}
const obj = {
   a: {
      b: {
         c: {
            d: 'test',
            e: {
               f: 5
            }
         }
      }
   }
};
console.log(contains(obj, 5));
console.log(contains(obj, '5'));
console.log(contains(obj, 'ololo'));

console.log("-------------------------------------------------");

//*    3)   function createStack

function createStack() {
   let list = [];
   const stack = {
      add: function (item) {
         list.push(item);
      },
      remove: function () {
         list.pop();
      },
      get: function () {
         for (let i = list.length - 1; i >= 0; i--) {
            console.log(`item ${i+1} = ${list[i]}`);
         }
      },
   };
   return stack;
}

const stack = createStack();
stack.add(5);
stack.add("test");
stack.remove();
stack.get(); // [5]
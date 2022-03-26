/*jshint esversion: 9 */
/* jslint node: true */
"use strict";

//*   1)  array sum

function getSum(arr, arraySum = 0) {
   if (arr.length === 0) {
      return +arraySum;
   }

   if (Array.isArray(arr[arr.length - 1])) {
      arraySum += getSum(arr[arr.length - 1]);
      arr.pop();
   }
   return getSum(arr, arraySum += arr.pop());

}
console.log(getSum([6, 5, 2, [10, 3], 4, 3]));

console.log(getSum([1, [2, [3]]]));

console.log("-------------------------------------------------");

//*      2)  function "contains"

function contains(obj, val) {
   let result = false;

   for (let key in obj) {
      if (typeof (obj[key]) === 'object' && typeof(obj[key]) != null) {
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
   //...
   }
   
   const stack = createStack();
   // stack.add(5);
   // stack.add("test");
   // stack.remove();
   // stack.get(); // [5]
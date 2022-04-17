/*jshint esversion: 9 */
/* jslint node: true */
"use strict";
function createAsyncList(iterations) {
   const data = [];
   return new Promise((resolve, reject) => {
      for( let i = 0; i< iterations; i++){
         setTimeout( () => {
            data.push({message: `Current iteration ${i+1}`});
         }, 1000);
      }
      setTimeout( () => {
         resolve(data);
      },1000); 
   });
   }
 // Должна возвращать промис
  createAsyncList(3).then((data) => {
   console.log(data); // [{message: 'Current iteration 1'}, {message: 'Current iteration 2'}, {message: 'Current iteration 3'}]
  });
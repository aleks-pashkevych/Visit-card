function makeString(str) {
   let output = str;

   function inner(other) {
      output += ` ${other}`;
      return inner;
   }
   inner [Symbol.toPrimitive] = function (hint) {
      return output;
   };

   return inner;
}
// console.log(makeSrting('Hello')('world')); // --> 'Hello world'
// makeSrting('Test')('super')('test'); // --> 'Test super test'
let str = (makeString('Hello')('world'));
console.log(str);
alert(str);

str = makeString('Test')('super')('test');
console.log(str);
alert(str);
function makeString(str) {
   let output = str;

   function inner(other) {
      output += ` ${other}`;
      console.log(output);
      return inner;
   }
   inner.toString( function () {
      return output;
   });
   return inner;
}
// console.log(makeSrting('Hello')('world')); // --> 'Hello world'
// makeSrting('Test')('super')('test'); // --> 'Test super test'
let str = makeString('Hello')('world');
console.log(str);
str = makeString('Test')('super')('test');
console.log(str);
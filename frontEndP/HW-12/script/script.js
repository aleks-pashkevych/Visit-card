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


// & TASK 2

const person = {
   name: "Alex",
   dob: 1995,
   makeRequest() {
    alert("Request sended");
   },   
  };

  const otherPerson = {
   name: "Evgen",
   dob: 2012,
   makeRequest() {
    alert("Request sended");
   },   
  };
  
  const log = [];
  function guard(func, prs){
   const cYear = new Date().currentYear;
   const age = cYear - prs.dob;
   func;
   let rez = false;
   if(age >= 18) {
      rez = true;
      alert("Access granted.");
   }   
log.push({time: new Date(), user: prs.name, Access: rez});
}

guard(person.makeRequest(), person);
guard(otherPerson.makeRequest(), otherPerson);
console.log(log);
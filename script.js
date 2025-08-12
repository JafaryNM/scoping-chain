'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} have ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1982 && birthYear < 1996) {
      // Var not apply block scope
      var millenium = true;

      //  Reassigning outer scope
      output = 'output';
      const firstName = 'Mosses';
      const str = `Ohh ${firstName} you are millenium`;
      console.log(str);
    }
    console.log(millenium);
    function add(a, b) {
      return a + b;
    }
    add(1, 2);
    output = 'Output';
    // console.log(output);
  }
  printAge();
}
// console.log(add(1, 2));
// Scopping chain problem
// return age;

const firstName = 'Jafary';
calcAge(1991);

'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName} have ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1982 && birthYear < 1996) {
//       // Var not apply block scope
//       var millenium = true;

//       //  Reassigning outer scope
//       output = 'output';
//       const firstName = 'Mosses';
//       const str = `Ohh ${firstName} you are millenium`;
//       console.log(str);
//     }
//     console.log(millenium);
//     function add(a, b) {
//       return a + b;
//     }
//     add(1, 2);
//     output = 'Output';
//     // console.log(output);
//   }
//   printAge();
// }
// // console.log(add(1, 2));
// // Scopping chain problem
// // return age;

// const firstName = 'Jafary';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'jafary';
// let job = 'Javascript Developer';
// const year = 1995;

// console.log(addDecl(1, 3));

// console.log(addExp(1, 2));
// console.log(arrEx(1, 2));

function addDecl(a, b) {
  return a + b;
}
// Return another error which is not function
var addExp = function (a, b) {
  return a + b;
};

const arrEx = (a, b) => a + b;

// Example of hosting

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

//  var produce window object

var x = 2;
let y = 4;
const z = 8;

if (x === window.x) {
  console.log('true');
} else {
  console.log('false');
}

if (y === window.y) {
  console.log('true');
} else {
  console.log('false');
}

if (z === window.z) {
  console.log('true');
} else {
  console.log('false');
}

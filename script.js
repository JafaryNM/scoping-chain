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

// function addDecl(a, b) {
//   return a + b;
// }
// // Return another error which is not function
// var addExp = function (a, b) {
//   return a + b;
// };

// const arrEx = (a, b) => a + b;

// // Example of hosting

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// //  var produce window object

// var x = 2;
// let y = 4;
// const z = 8;

// if (x === window.x) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// if (y === window.y) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// if (z === window.z) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// console.log(this);

// // this keyword in normal return undefined
// const calcAge = function (birthYear) {
//   const age = 2030 - birthYear;
//   console.log(age);
//   console.log(this);
// };

// calcAge(1995);

// // This keyword in arrow function

// const calcAgeArrow = birthYear => {
//   const age = 2030 - birthYear;
//   console.log(age);
//   console.log(this);
// };

// calcAgeArrow(1995);

// // This keyword inside object methods

// const jonas = {
//   firstName: 'jafary',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2030 - this.year);
//   },
// };

// // Method borrowing

// const matilda = {
//   firstName: 'Matilda',
//   year: 2000,
// };

// // Method borrowing

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();
// jonas.calcAge;

// Different betwen Arrow and Normal
// Problem for arrow fn
// var firstName = 'Jafary global';
// const jonas = {
//   firstName: 'jafary',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2030 - this.year);
//     const self = this;
//     // Expressions produce undefined this
//     // const isMellinium = function () {
//     //   console.log(this.year >= 1981 && this.year < 1996);
//     // };

//     // Solution 1
//     // const isMellinium = function () {
//     //   console.log(self.year >= 1981 && self.year < 1996);
//     // };
//     // isMellinium();

//     const isMellinium = () => {
//       console.log(this.year >= 1981 && this.year < 1996);
//     };
//     isMellinium();
//   },

//   // Solution 2

//   greet: () => console.log(`Hey there ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// // function expressions
// // Receive arguments as an arrays
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExp(2, 3, 6, 7);

// // Arguments is not existing
// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 3, 4, 5);

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedPerson = marryPerson(jessica1, Devic);

// Applying borrow object techniques

const marriedJessica = jessica1;
marriedJessica.lastName = 'John';

// Point same variable in heap  output lastname Willaam == John

console.log('Before', jessica1);
console.log('After', marriedJessica);

// Implement spread operators

const jessica = {
  firstName: 'Jessica',
  lastName: 'John',
  age: 30,
  family: ['Jophrey', 'Julian'],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Juma';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Johnson');
console.log('Jessica Original', jessica);
console.log('Jossica Copy', jessicaCopy);
console.log(jessica, jessicaCopy);

// Deep clone objects
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('JaffaryClone');
jessicaClone.family.push('John Clone');
console.log('Jessica Original', jessica);
console.log('Jessica Clone', jessicaClone);

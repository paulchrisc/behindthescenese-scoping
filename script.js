'use strict';

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function printAge() {
//     const output = `${firstName}You are ${age}, born in ${birthyear}`;

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

//variable hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //functions hoisting

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// //only funct declaration can be called before declaring

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// example
// let numProducts = 10;
// if (!numProducts) deleteShoppingCart();

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   console.log(this); //points to the global scope
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// // const f = jonas.calcAge;

// // f();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this;
//     // const isMillenial = function () {
//     //   //   console.log(this.year >= 981 && this.year <= 1996);
//     //   console.log(self.year >= 981 && self.year <= 1996);
//     // };

//     const isMillenial = () => {
//       //   console.log(this.year >= 981 && this.year <= 1996);
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 9, 0, 10);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 7);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me', me);

//primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// only creates a shallow copy {only copies first level}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);

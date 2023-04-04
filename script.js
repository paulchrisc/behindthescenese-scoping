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
// matilda.calcAge();

// const f = jonas.calcAge;

// f();

//Assignment questions based on arrays, functions and objects
//1. Write a function that prints hello
// function printHello() {
//   console.log("Hello Javascript");
// }
// printHello();
// 2. create function add(a,b) and return the sum of a and b
// function add(a, b) {
//   return a + b;
// }
// console.log(add(100, 200));
// 3. Write a function with a default parameter ` name =
// "Guest"` that prints ` "Hi <name>".
// function greet(name) {
//   console.log(`Hi ${name}`);
// }
// greet("Vaishnavi");
// 4. Use rest parameters to make a function that adds
// unlimited numbers.
// function add(...num) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log(sum + " is the sum of given numbers");
// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);
// 5. create IIFE that runs instantly
// (function instant() {
//   console.log("I run instantly...");
// })();
// 6. Make a nested function where the inner one prints a
// variable from the outer one.
// function outer() {
//   let a = 100;

//   function inner() {
//     console.log(a, " from outer");
//   }
//   inner();
// }
// outer();
// 7. Create an array of 5 fruits. Add one at the end and
// remove one from the beginning.
// let arr = ["apple", "mango", "banana", "grapes", "avagado"];
// arr.shift();
// console.log(arr);
// arr.unshift("strawberry");
// arr.push("watermelon");
// arr.pop();
// 8. use for loop to print array elements

// let arr = ["apple", "mango", "banana", "grapes", "avagado"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 9. Create an object person with keys name , age ,
// and `city', and print each key's value.

// let person = {
//   name: "Vaishnavi",
//   age: 23,
//   city: "Pune",
// };
// console.log(
//   `Hi my name is ${person.name}, I am ${person.age} years old. I live in ${person.city}.`
// );

// 10. Use `setTimeout() to log ` "Time's up!" after 2
// seconds.

// setTimeout(() => {
//   console.log("Times Up!");
// }, 2000);

// 1. Write a higher-order function ` runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(a) {
//   let ct = 0;
//   while (ct < 2) {
//     a();
//     ct++;
//   }
// }
// runTwice(() => {
//   console.log("Hi I am Vaishnavi");
// });

// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

// let a = 100;

// function greet(name) {
//   console.log(`Hi my name is ${name}`);
// }
// greet("Harsh");

// function impure() {
//   a++;
//   console.log("Hi I am updated value of a ", a);
// }
// impure();

// 3. Write a function that uses object destructuring
// inside parameters to extract and print ` name` and
// age.

// let person = {
//   name: "Vaishnavi",
//   age: 23,
// };
// person.social = "instagram";
// function printPerson({ name, age, social }) {
//   console.log(`Hi my name is ${name} and age is ${age} and I use ${social}`);
// }
// printPerson(person);

// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the ` this" issue).

// let person2 = {
//   name: "Raj",
//   age: 26,
//   func1: function () {
//     console.log("From fnc1: ", this);
//     (() => {
//       console.log(this);
//     })();
//   },
// };
// person2.func1();

// let person = {
//   name: "Vaishnavi",
//   sayHi: () => {
//     console.log(this.name, " from arrow");
//   },
// };
// person.sayHi();

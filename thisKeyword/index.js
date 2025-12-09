// //
// console.log(this + " this in global scope");

// function abcd() {
//   console.log(this + " this in function scope");
// }
// abcd();

// let obj = {
//   name: "harsh",
//   fnc: function () {
//     console.log(this + " this is value in normal function of object");
//   },
// };
// obj.fnc();
// let obj2 = {
//   name: "harsh",
//   fnc2: () => {
//     console.log(this + " this is value in arrow function of object");
//   },
// };
// obj2.fnc2();

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this.innerHTML);
// });

// let obj = {
//   name: "Vaishnavi",
//   sayName: function () {
//     let defg = () => {
//       console.log(this);
//     };
//     defg();
//   },
// };
// console.log(obj.sayName());

const userManager = {
  name: "Vaishnavi",
  showThis: function () {
    return this;
  },
};
let fnc = userManager.showThis();

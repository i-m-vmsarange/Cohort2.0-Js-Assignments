// Loops and Conditionals Level-1
// 7. Ask user's age and check if eligible to vote
// If age >= 18 - "Eligible", else - "Not eligible"

// let age = prompt("Enter user age:");

// if (age === null) {
//   console.error("You pressed cancel");
// } else if (age.trim() === "") {
//   console.log("Kuch to likhde bhai........");
// } else if (isNaN(age.trim())) {
//   console.log("Please enter a number");
// } else {
//   age = parseInt(age);
//   console.log(typeof age);
//   if (age >= 18 && age <= 100) {
//     console.log("ELIGIBLE");
//   } else if (age > 100 || age < 0) {
//     console.log("PlEASE ENTER VALID AGE");
//   } else {
//     console.log("NOT ELIGIBLE");
//   }
// }

// 8. Print multiplication table of 5
// Use loop to print 5 x 1 to 5 x 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let counter = 0;

// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     console.log(i + " " + (counter + 1));
//     counter++;
//   }
// }
// console.log(
//   "There are total " + counter + " numbers greater than 8 between 1 to 15"
// );

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let attempt = 0;
// let sahipassword = "harsh";
// let userpassword = prompt("Enter password");
// attempt++;
// while (userpassword !== sahipassword) {
//   if (attempt === 3) {
//     document.writeln("ACCOUNT LOCKED!");
//     break;
//   }
//   attempt++;
//   userpassword = prompt("Enter password");
// }

// while (attempt < 3 && userpassword !== sahipassword) {
//   userpassword = prompt("Enter password");
//   attempt++;
// }

// if (attempt === 3 && userpassword !== sahipassword) {
//   document.writeln("ACCOUNT LOCKED!");
// } else {
//   document.writeln("ACCESS GRANTED!");
// }

// SECOND APPROACH

// let attempt = 0;
// let sahipassword = "harshbhai";
// let userpassword;
// do {
//   userpassword = prompt("Enter password");
//   attempt++;
//   if (userpassword === sahipassword) {
//     console.log("ACCESS GRANTED");
//   } else if (attempt === 3) {
//     console.log("account locked");
//   }
// } while (attempt < 3 && userpassword !== sahipassword);

// 12. Ask user for words until they type "stop". Count how many times they typed "yes"
// Loop until "stop" is typed. Count "yes".
// let counter = 0;
// let word = prompt("Enter word");
// if (word === "yes") {
//   counter++;
// }
// while (true) {
//   if (word === "yes") {
//     counter++;
//   }
//   if (word === "stop") {
//     console.log(counter);
//     console.log("You typed stop");
//     break;
//   }
//   word = prompt("Enter word");
// }

// 13. Print numbers divisible by 7 betweeen 1 to 50

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 == 0) {
//     console.log(i + " divisible by 7");
//   }
// }

// 14. Print sum of all odd numbers from 1 to 30.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(`Sum of all odd numbers between 1 to 30 is ${sum}`);

// 15. Keep asking number until user enters even number

// let number = +prompt("Enter number");

// while (true) {
//   if (number % 2 == 0) {
//     console.log(`${number} IS EVEN`);
//     break;
//   }
//   number = +prompt("Enter number");
// }

// 16. print numbers between start input and end input numbers of user

// let start = +prompt("Enter start:");
// let end = +prompt("Enter end:");

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }
// console.log(`Numbers between ${start} and ${end}`);

// 17. Print first 3 odd numbers between  1 to 20
// let counter = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0 && counter !== 3) {
//     console.log(i);
//     counter++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// let number;
// let count = 0;
// for (let i = 1; i <= 5; i++) {
//   number = +prompt("Enter number");
//   if (number > 0) {
//     console.log(`${number} is positive`);
//     count++;
//   }
// }
// console.log(`Total positive numbers between user inputs are ${count}`);

// 19. ATM Simulator - Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times
// If enough balance - deduct
// Else - print "Insufficient balance"

let currentBalance = 1000;
let attempt = 0;
let amount;
while (attempt < 3) {
  amount = +prompt("Enter amount you want to withdraw");
  if (isNaN(amount) || amount < 0 || amount === 0) {
    console.log("Please enter valid amount!!!");
    break;
  } else if (amount > currentBalance) {
    console.log(`Insufficient Balance`);
    break;
  } else {
    currentBalance = currentBalance - amount;
    console.log(
      `Amount withdrawn ${amount}, Your current balance is ${currentBalance}`
    );
  }
  attempt++;
}

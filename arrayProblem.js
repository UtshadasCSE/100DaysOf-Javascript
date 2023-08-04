const prompt = require("prompt-sync")();
// problem 01
// let arr = [12, 13, 12, 3, 41, 2];
// let addArr = parseInt(prompt("Enter number:"));
// arr.push(addArr);
// console.log(arr);
// console.log(-17 % 5);

// problem 2
// let numer = [];
// let a;
// do {
//   a = parseInt(prompt("Enter number:"));
//   numer.push(a);
// } while (a != 0);
// console.log(numer);

// problem 3

let number = [];
let a;
do {
  a = parseInt(prompt("Enter number:"));
  number.push(number);
} while (a != 0);
console.log(number);

number.filter((range) => {
  if (range < 10) {
    range + 2;
  }
  console.log(range);
});

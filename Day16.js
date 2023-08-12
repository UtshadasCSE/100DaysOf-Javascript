// let marks = [90, 80, 97, 100, 87, 98, 88, 80, 50, 90, 92, 100];
// // for (let i = 0; i < marks.length; i++) {
// //   console.log(i, marks[i]);
// // }
// for (const mark of marks) {
//   console.log(mark);
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (const number of numbers) {
//   result.push(number * 2);
// }
// console.log(result);

// let double = (numbers) => {
//   let result = [];
//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// };
// console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// let sumArray = (numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum = sum + number;
//   }
//   return sum;
// };
// console.log(sumArray[(12, 12, 12, 12)]);

let letterConter = (pharse) => {
  let result = 0;

  for (const letter in pharse) {
    result = Number(letter) + 1;
  }
  return { result };
};
let pharse =
  "Hello bangladesh,few days ago an occur begin in this country!don't worry stay safe";
console.log(letterConter(pharse));

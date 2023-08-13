//
// let result = 0;
// const sumArray = (numbers) => {
//   for (const number of numbers) {
//     result += number;
//   }
//   return { result };
// };
// console.log(sumArray([12, 12, 12]));
// const prompt = require("prompt-sync")();
// const maxArrayNumber = (numbers) => {
//   let result = numbers[0];
//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return { result };
// };
// console.log(maxArrayNumber([12, 34, 53, 11, 6, 3, 43]));

// let letterFreq = (phrase) => {
//   //make a freq object
//   let freq = {};
//   for (const letter of phrase) {
//     if (letter in freq) {
//       freq[letter] = freq[letter] + 1;
//     } else {
//       freq[letter]++;
//     }
//     // console.log(lett);
//   }
//   return freq;
// };

// console.log(
//   letterFreq("i am good person any girl can be mine but i am only like her")
// );

// const wordFreq = (sentence) => {
//   let freq = {};
//   let words = sentence.split(" ");
//   // console.log(words);
//   for (const word of words) {
//     // console.log(word);
//     if (word in freq) {
//       freq[word] += 1;
//     } else {
//       freq[word] = 1;
//     }
//   }
//   return freq;
// };
// console.log(wordFreq("Hi am hi mister hi"));

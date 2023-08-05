const prompt = require("prompt-sync")();
let number = Math.floor(Math.random() * 100) + 1;
let userInput;
do {
  userInput = parseInt(prompt("Enter your number between 1 to 100:"));
  if (userInput != number && userInput < number) {
    console.log("Your guessing number is wrong and small than random number");
  } else if (userInput != number && userInput > number) {
    console.log("Your guessing number is wrong and bigger than random number");
  } else {
    console.log("Congrats! you guessing the number");
  }
} while (userInput !== number);

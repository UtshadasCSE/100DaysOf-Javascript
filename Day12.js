// const prompt = require("prompt-sync")();
// let userInput = parseInt(prompt("Enter your age:"));
// if (userInput > 18) {
//   alert("You can drive dude");
// }
const prompt = require("prompt-sync")();
let playerChoice;
let computerChoice = Math.floor(Math.random() * 3) + 1;

function gamplay() {
  console.log("1.Rock\n2.Paper\n3.Scissors");
  playerChoice = parseInt(prompt("Enter your choice:"));
  if (computerChoice == playerChoice) {
    console.log("You won! Computer and your choice-", +computerChoice);
  } else if (computerChoice > playerChoice) {
    console.log("You Lose. Computer choice-", computerChoice);
  } else if (computerChoice < playerChoice) {
    console.log("You Lose. Computer choice-", computerChoice);
  } else {
    console.log("Something wrong here!!");
  }
}
gamplay();

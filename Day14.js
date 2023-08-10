const prompt = require("prompt-sync")();

function calculateTip() {
  let food = Number(prompt("How much was the food:"));
  let tip = Number(prompt("Tip%:"));
  let tipPer = tip / 100;
  let total = food + tipPer;
  let totalTip = total / tipPer;
  return totalTip;
}
console.log(calculateTip());

const prompt = require("prompt-sync")();
// write your code from here

// let year = parseInt(prompt("Enter your year:"));

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("It's a Leap year!");
// } else {
//   console.log("Not a Leap Year");
// }

const leapYear = () => {
  let year = parseInt(prompt("Enter your year:"));
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("It's a Leap Year");
  } else {
    console.log("It's not a Leap Year");
  }
  let choice = prompt("Select your choice: \n1.Yes(y)\n2.No(n)\n:");
  switch (choice) {
    case "y" || "Y":
      let year = parseInt(prompt("Enter your year:"));
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("It's a Leap Year");
      } else {
        console.log("It's not a Leap Year");
      }

      break;
    case "n" || "N":
      console.log("Session Exit");

    default:
      console.log("Invalid Error");
      break;
  }
};
leapYear();

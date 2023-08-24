// const waitingForSoup = () => console.log("soup");
// console.log("1")
// setTimeout(waitingForSoup, 3000);
// console.log("3")

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("You soup is ready") : reject("No Soup today");
  }, 3000);
});
// console.log(promise1
//   .then(sucess => console.log({ sucess }))
//   .catch(error => console.log({ error })))
// if (isReady) {
//   "run This"
// }
// else {
//   "Do Thsi"
// }

const getDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
getDog();

const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };

  try {
    const soup = await promise1;
    data.rating = 5;
    data.tip = 20;
    data.pay = 300;
    data.review = 4.5;
    return data;
  } catch (error) {
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};
getSoup().then((value) => console.log(value));

const sum = async (a, b) => a * b;
console.log(sum(10, 10).then((value) => console.log(value)));

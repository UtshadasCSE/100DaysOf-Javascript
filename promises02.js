const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = true;
    isReady
      ? resolve("Your Soup is Ready")
      : reject("Your Soup is not ready yet");
  }, 3000);
});
console
  .log(promise1.then((value) => console.log(value)))
  .catch((value) => console.log(value));

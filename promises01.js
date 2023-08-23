// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task-db calls,crypto,networ
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 3000);
// });
// promiseOne.then(function () {
//   console.log("Promises consumed");
// });
// promiseOne.then(function () {
// //   console.log("Cosumed");
// });
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task Complete");
    resolve();
  }, 4000);
}).then(function () {
  console.log("Task resolved");
});

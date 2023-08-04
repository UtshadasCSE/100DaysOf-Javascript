// let name = ["utsha", "weed", "nuno", "sallu", "jadu"];
// for (let index = 0; index < name.length; index++) {
//   console.log(name[index], "\n");
// }

let arr = [12, 12, 3, 4, 23, 12, 312, 12];

arr.map((element, index, array) => {
  console.log(element, index, array);
});

let fillArr = [120, 23, 12, 8, 3, 4];
let newFillArr = fillArr.filter((a) => {
  return a < 10;
});
console.log(newFillArr);

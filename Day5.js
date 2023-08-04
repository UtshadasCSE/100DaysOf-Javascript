let obj = {
  name: "SRK",
  age: 50,
  profession: "Actor",
};

console.log(obj);
let name = obj.name;
console.log(name);

let objFun = {
  color: "blue",
  wheel: 4,
  totalSpeed: function () {
    let speed = 200;
    console.log("Please you speed up", speed);
  },
  bmw: {
    model: "BMW",
    color: "Pink",
    price: "$30000",
  },
};
let speed = objFun.totalSpeed;
let bmw = objFun.bmw;
console.log(bmw);
console.log(speed);
obj.name = "PK";
console.log(obj);

function name() {
  let name = "Utsha";
  function conCat(name) {
    return "MR " + name;
  }
  console.log(conCat(name));
}
name();

function sum(a, b, c) {
  console.log(a + b + c);
}
sum(12, 12, 12);

let printAddress = () => {
  add = {
    home: "Dhaka",
    country: "Bangladesh",
  };
  console.log(add);
};
printAddress();

// let fruit = ["apple", "banana", "orange", "watermalen"];

// console.log(fruit.slice(0, 2));

const info = (name, shirt) => {
  let person = {
    name: name,
    shirt: shirt,
    assets: 100000000,
    debate: 50000,
    networth: function () {
      return this.assets - this.debate;
    },
  };
  let intro = `My name is ${person.name} and shirt brand is ${
    person.shirt
  } and my net worth is ${person.networth()}`;
  return intro;
};
console.log(info("utsha", "Gucci"));

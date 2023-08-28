class Car {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hello " + this.name);
  }
}

let person = new Car("Danish");
person.sayHi();

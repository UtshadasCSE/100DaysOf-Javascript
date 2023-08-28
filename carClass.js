class Car {
  constructor(name, color, topSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
  }
  getCurrentSpeeed() {
    return currentSpeed;
  }
  zeroToSixty() {
    setTimeout(() => {
      console.log("pHEW! that was fast");
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    }, 3000);
  }
  drive(speed = 10) {
    this.currentSpeed += speed;
    console.log(`Driving speed at ${this.currentSpeed}mph`);
  }
  brake() {
    console.log("Braking");
    this.currentSpeed -= 10;
  }
  stop() {
    console.log("coming to a screeching halt!");
    this.currentSpeed = 0;
  }
}

const ferrari = new Car("ferrai", "red", 250);
ferrari.drive();
ferrari.drive();
ferrari.stop();
console.log(ferrari.getCurrentSpeeed);

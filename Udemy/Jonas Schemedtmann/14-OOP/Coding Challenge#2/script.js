//Coding Challenge #1 from lecture 209
'use strict';
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`the speed has been increased to ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`the speed has been decreased to ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const car1 = new Car('Ford', 120);

car1.accelerate();
car1.brake();
console.log(car1.speedUS);
car1.speedUS = 60;
console.log(car1.speed);
console.log(car1.speedUS);

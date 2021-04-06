//Coding Challenge #4 from lecture 224
'use strict';
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge *= 0.99;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const electricCar = new EVCl('Tesla', 120, 23);
electricCar.chargeBattery(90).accelerate();

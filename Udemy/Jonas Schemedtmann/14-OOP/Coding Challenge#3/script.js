//Coding Challenge #3 from lecture 216
'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge *= 0.99;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const electricCar = new EV('Tesla', 120, 23);

electricCar.chargeBattery(90);
electricCar.accelerate();
electricCar.brake();

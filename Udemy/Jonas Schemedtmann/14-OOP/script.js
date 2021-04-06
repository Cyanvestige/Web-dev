'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   const data = new Date();
// };

// const aPerson = new Person('WhoEver', 2000);
// console.log(aPerson);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked  to  prototype
// // 4. function automaticaly return {}

// // Protypes

// Person.prototype.calcAge = function () {
//   const currYear = new Date().getFullYear();
//   console.log(currYear - this.birthYear);
// };

// console.log(aPerson.calcAge());
// console.log(aPerson.__proto__);

//ES6 Class
class PersonCl {
  #currYear;
  constructor(fullName, birthYear) {
    this.#currYear = new Date().getFullYear();
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(this.#currYear - this.birthYear);
  }

  get age() {
    return this.#currYear - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a strudent I feel more lie ${
        2037 - this.birthYear + 10
      } years old`
    );
  }
}
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

const aPerson = new PersonCl('WhoEver Is', 2000);
const newPerson = new PersonCl('a b', 1000);
// const aStudent = new Student('Unknown Student', 2050, 'Chemistry');

const account = {
  owner: 'Stranger',
  _movements: [100, 200, 300, 400, 500],

  get latest() {
    return this._movements.slice(-1).pop();
  },

  set latest(mov) {
    this._movements.push(mov);
  },

  get age() {
    return 2037 - this.birthYear;
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account._movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2000;
// steven.calcAge();

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'NoMajor');
jay.introduce();
jay.calcAge();

//Another example
class Account {
  // Public fields(instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public methods
  //Public interface
  getMovement() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }

  withdrawl(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Lone approved`);
    }
  }

  //Private methods(Does not work yet)
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// console.log(acc1.#movements);
acc1.deposit(250);
acc1.withdrawl(140);
console.log(acc1);

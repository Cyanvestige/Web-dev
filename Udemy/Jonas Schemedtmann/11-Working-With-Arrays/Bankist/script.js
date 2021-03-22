'use strict';

// const { connect } = require('http2');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov.toFixed(2)}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const user = 'Steven Thomas Williams';

const createUserName = accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = acc.balance.toFixed(2) + '€';
};

const calDisplaySummary = function (user) {
  const incomes = user.movements
    .filter(mov => {
      return mov > 0;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  const out = user.movements
    .filter(mov => {
      return mov < 0;
    })
    .reduce((acc, mov, i) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  const interest = user.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * user.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
let currentAccount;

//update UI
const updateUI = acc => {
  displayMovements(acc.movements);
  calDisplayBalance(acc);
  calDisplaySummary(acc);
};

//user login
btnLogin.addEventListener('click', e => {
  //Prevent form from submitting
  e.preventDefault();

  console.log('aaa');
  currentAccount = accounts.find(
    user => inputLoginUsername.value === user.username
  );

  if (currentAccount && +inputLoginPin.value === currentAccount.pin) {
    inputTransferTo.value = inputTransferAmount.value = '';
    console.log(currentAccount);
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    updateUI(currentAccount);
  } else {
    alert('Username or Password Incorrect');
  }
});
console.log(accounts);

//transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let toAccount = accounts.find(
    user => inputTransferTo.value === user.username
  );
  let amount = +inputTransferAmount.value;
  console.log(amount, toAccount, currentAccount);
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    toAccount &&
    toAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    toAccount.movements.push(amount);
    // labelBalance.textContent = `${currentAccount.balance}€`;
    updateUI(currentAccount);
    console.log(amount, toAccount, currentAccount);
  }
});

//loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    inputCloseUsername.value = inputClosePin.value = '';
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//Create an array for all movements when click the balance
labelBalance.addEventListener('click', e => {
  e.preventDefault();
  const movementArr = Array.from(
    document.querySelectorAll('.movements__value'),
    el => +el.textContent.replace('€', '')
  );
  console.log(movementArr);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}:You withdrew ${Math.abs(movement)}`);
  }
});

const filterTest = account3.movements;
console.log(filterTest);
const filterTestNeg = filterTest.filter(function (mov) {
  return mov < 0;
});
console.log(filterTestNeg);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2)); //'b,c'

// //SPLICE
// console.log(arr.splice(2));
// arr.splice(-1); //remove the last element
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse);
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('-'));

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}:You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);

//flat
const sumofAllMove = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(sumofAllMove);

//sort
const arr = [100, 4, 120, -42, 123, 4985, -234, -59, -1222];
arr.sort((a, b) => a - b); //a < b --> keep order a > b --> switch order
console.log(arr);

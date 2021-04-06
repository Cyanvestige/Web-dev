'use strict';
import App from './App.js';
const resetBtn = document.querySelector('.clear');
const app = new App();
resetBtn.addEventListener('click', () => {
  app.reset();
});

// const run1 = new Running([21, 42], 100, 20, 2);
// const cyc1 = new Cycling([21, 42], 100, 20, 2);
// console.log(run1);
// console.log(cyc1);

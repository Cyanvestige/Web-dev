'use strict';
let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let showMessage = string => {
  document.querySelector('.message').textContent = string;
};

let updateScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No input!';
  }
  if (guess !== secretNum) {
    if (score > 1) {
      guess < secretNum ? showMessage('too low!') : showMessage('too large!');
      score--;
      updateScore(score);
    } else {
      showMessage('You lost the game!');
      updateScore(0);
    }
  } else {
    document.querySelector('.number').textContent = secretNum;
    showMessage('You got it!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (document.querySelector('.score').textContent > highScore) {
      highScore = document.querySelector('.score').textContent;
      document.querySelector('.highscore').textContent = highScore;
    }
    highScore = document.querySelector('.score').textContent;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  updateScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNum = Math.trunc(Math.random() * 20 - 1);
});

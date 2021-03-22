'use strict';
//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0EL = document.querySelector('#current--0');
const currentScore1EL = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

let scores = [0, 0];
let player0Score = 0;
let player1Score = 0;
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let newGame = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let playing = 1;

let switchUser = () => {
  document.querySelector('.player--0').classList.toggle('player--active');
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector('.player--1').classList.toggle('player--active');
};

roll.addEventListener('click', () => {
  if (playing) {
    //1.generate a dice randomly
    let dice = Math.trunc(Math.random() * 6 + 1);
    //2.display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    //3.if it's 1 swtich to the next player
    if (dice !== 1) {
      currentScore += dice;
      //Add dice to the current player's score
    } else {
      currentScore = 0;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      switchUser();
      //Switch to another player
    }
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  }
});
hold.addEventListener('click', () => {
  if (playing === 1) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = 0;
      diceEl.classList.add('hidden');
    } else {
      currentScore = 0;
      switchUser();
    }
  }
});

newGame.addEventListener('click', () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  score1El.textContent = scores[0];
  score0El.textContent = scores[1];
  currentScore0EL.textContent = currentScore;
  currentScore1EL.textContent = currentScore;
  playing = 1;
});

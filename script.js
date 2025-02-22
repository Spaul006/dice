'use strict';
let score0 = document.querySelector('#score--0');
let current0 = document.querySelector('#current--0');
let score1 = document.querySelector('#score--1');
let current1 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let playing = true;

dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
rollDice.addEventListener('click', function () {
  if (playing) {
    console.log('click - roll');
    let rollR = Math.trunc(Math.random(1, 6) * 6) + 1;
    console.log(rollR);
    dice.classList.remove('hidden');
    dice.src = `dice-${rollR}.png`;
    if (rollR != 1) {
      currentScore += rollR;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

holdDice.addEventListener('click', function () {
  if (playing) {
    console.log('click - hold');
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer == 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

newGame.addEventListener('click', function () {
  console.log('click - new game');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  playing = true;
});

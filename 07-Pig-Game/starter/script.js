'use strict';

//hien thi dice khi an nut quay
/* function showDice () {
var ranDomDiceRoll = Math.floor(Math.random()*6) + 1;
var newDice = 'dice-' + ranDomDiceRoll + '.png';
  document.querySelector('img').setAttribute('src', newDice);

  if (ranDomDiceRoll > 1) {
    currentScore1 += ranDomDiceRoll;
    document.querySelector('#current--1').innerHTML = currentScore1;
  } 

}
//gan su lien vao nut roll dice
document.querySelector('.btn--roll').addEventListener('click', function(){showDice();});
 */

//bo Element va cac bien gia tri
var score0El = document.querySelector('#score--0');
var score1El = document.querySelector('#score--1');
var diceEl = document.querySelector('.dice');
var currentScore0El = document.querySelector('#current--0');
var currentScore1El = document.querySelector('#current--1');

var currentScore = 0;
var score = [0, 0];
var activePlayer = 0;

// condition start the game
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add('hidden'); // hidden xuc xac

// 

document.querySelector('.btn--roll').addEventListener('click', function () {
  //random 1 con so
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  diceEl.setAttribute('src', `dice-${randomNumber}.png`);
  //hien thi xuc xac
  diceEl.classList.remove('hidden');
  // kiem tra xem phai 1 ko, neu ko phai thi cong diem vao  current, neu phai switch player
  if (randomNumber != 1) {
    currentScore += randomNumber;
    document.querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
  } else { // neu xuc xac = 1
    //currentScore cua nguoi dang choi  = 0
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
    // doi nguoi choi
    activePlayer = activePlayer === 0 ? 1 : 0;

  }
});

//hold btn
function handleHoldButtonClick(e) {
  //luu diem current vao diem Score
  document.getElementById(`score--${activePlayer}`).innerHTML = score[activePlayer] + currentScore;
  score[activePlayer] += currentScore;
  // hien thi diem score
  //kiem tra xem score = 100 ko? neu du dk thi win
  if (score[activePlayer] >= 15) {
    // activePlayer win
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.getElementById(`name--${activePlayer}`).classList.add('.name');
    //vo hieu hoa nut hold va roll va an xuc xac
    document.querySelector('.btn--hold').removeEventListener('click', handleHoldButtonClick);
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  // neu nho hon 100 diem thi scurrent = 0, doi nguoi choi
};

document.querySelector('.btn--hold').addEventListener('click', handleHoldButtonClick);
//
//click new game
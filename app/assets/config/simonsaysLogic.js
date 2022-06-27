let correctArray = [];
let userArray = [];
let score = 0;
let gameFinished = false;
let highscore = 0;
function red() {
  if (gameFinished === true) {
    return;
  }
  userArray.push(1);
  if (correctArray[userArray.length - 1] === 1) {
    correctResponse()
  } else {
    gameOver();
  }
}
function yellow() {
  if (gameFinished === true) {
    return;
  }
  userArray.push(2);
  if (correctArray[userArray.length - 1] === 2) {
    correctResponse()
  } else {
    gameOver();
  }
}
function blue() {
  if (gameFinished === true) {
    return;
  }
  userArray.push(3);
  if (correctArray[userArray.length - 1] === 3) {
    correctResponse()
  } else {
    gameOver();
  }
}
function green() {
  if (gameFinished === true) {
    return;
  }
  userArray.push(4);
  if (correctArray[userArray.length - 1] === 4) {
    correctResponse()
  } else {
    gameOver();
  }
}
function correctResponse(){
  document.getElementById('testArray').innerHTML = userArray;
  if (userArray.length == correctArray.length) {
    score += 1;
    updateScore();
    correctArray.push(Math.floor(4*Math.random() + 1));
    document.getElementById('buttonslight').innerHTML = correctArray;
    userArray = [];
  }
}
function gameOver() {
  alert('Game Over');
  gameFinished = true;
}
function newGame() {
  correctArray = [];
  userArray = [];
  score = 0;
  updateScore();
  gameFinished = false;
  correctArray.push(Math.floor(4*Math.random() + 1));
  document.getElementById('buttonslight').innerHTML = correctArray;
  document.getElementById('testArray').innerHTML = userArray;
}
function updateScore() {
  document.getElementById('score').innerHTML = score;
  checkIfHighScore();
}
function checkIfHighScore() {
  if (score > highscore) {
    highscore = score;
    document.getElementById('highscore').innerHTML = highscore;
  }
}
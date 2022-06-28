let correctArray = [];
let userArray = [];
let score = 0;
let gameFinished = true;
let highscore = 0;

function red() {
  if (gameFinished === true) {
    return;
  }
  userArray.push(1);
  if (correctArray[userArray.length - 1] === 1) {
    document.getElementById('redSound').play();
    correctResponse();
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
    document.getElementById('yellowSound').play();
    correctResponse();
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
    document.getElementById('blueSound').play();
    correctResponse();
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
    document.getElementById('greenSound').play();
    correctResponse();
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
    playCorrectArray();
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
  playCorrectArray();
  document.getElementById('testArray').innerHTML = userArray;
}
async function playCorrectArray() {
  for (let i=0; i<correctArray.length; i++) {
    await sleep(700);
    switch (correctArray[i]) {
      case 1:
        document.getElementById('redSound').play();
        document.getElementById("red").style.backgroundColor = "crimson";
        setTimeout(()=>{document.getElementById("red").style.backgroundColor = "red"} , 700);
        break;
      case 2:
        document.getElementById('yellowSound').play();
        document.getElementById("yellow").style.backgroundColor = "gold";
        setTimeout(()=>{document.getElementById("yellow").style.backgroundColor = "yellow"} , 700);
        break;
      case 3:
        document.getElementById('blueSound').play();
        document.getElementById("blue").style.backgroundColor = "cornflowerblue";
        setTimeout(()=>{document.getElementById("blue").style.backgroundColor = "blue"} , 700);
        break;
      case 4:
        document.getElementById('greenSound').play();
        document.getElementById("green").style.backgroundColor = "lime";
        setTimeout(()=>{document.getElementById("green").style.backgroundColor = "green"} , 700);
        break;
      default:
        alert('Error note not found');
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
let correctArray = [];
let userArray = [];
let score = 0;
let gameFinished = true;
let highscore = 0;
let currentlyPlaying = false;

function red() {
  if (gameFinished === true || currentlyPlaying === true) {
    return;
  }
  userArray.push(1);
  if (correctArray[userArray.length - 1] === 1) {
    document.getElementById('redSound').currentTime=0;
    document.getElementById('redSound').play();
    correctResponse();
  } else {
    gameOver();
  }
}
function yellow() {
  if (gameFinished === true || currentlyPlaying === true) {
    return;
  }
  userArray.push(2);
  if (correctArray[userArray.length - 1] === 2) {
    document.getElementById('yellowSound').currentTime=0;
    document.getElementById('yellowSound').play();
    correctResponse();
  } else {
    gameOver();
  }
}
function blue() {
  if (gameFinished === true || currentlyPlaying === true) {
    return;
  }
  userArray.push(3);
  if (correctArray[userArray.length - 1] === 3) {
    document.getElementById('blueSound').currentTime=0;
    document.getElementById('blueSound').play();
    correctResponse();
  } else {
    gameOver();
  }
}
function green() {
  if (gameFinished === true || currentlyPlaying === true) {
    return;
  }
  userArray.push(4);
  if (correctArray[userArray.length - 1] === 4) {
    document.getElementById('greenSound').currentTime=0;
    document.getElementById('greenSound').play();
    correctResponse();
  } else {
    gameOver();
  }
}
function correctResponse(){
  if (userArray.length == correctArray.length) {
    score += 1;
    updateScore();
    correctArray.push(Math.floor(4*Math.random() + 1));
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
  playCorrectArray();
}
async function playCorrectArray() {
  for (let i=0; i<correctArray.length; i++) {
    currentlyPlaying = true;
    await sleep(800);
    switch (correctArray[i]) {
      case 1:
        document.getElementById('redSound').play();
        document.getElementById("red").style.backgroundColor = "crimson";
        setTimeout(()=>{document.getElementById("red").style.backgroundColor = "red"} , 750);
        break;
      case 2:
        document.getElementById('yellowSound').play();
        document.getElementById("yellow").style.backgroundColor = "gold";
        setTimeout(()=>{document.getElementById("yellow").style.backgroundColor = "yellow"} , 750);
        break;
      case 3:
        document.getElementById('blueSound').play();
        document.getElementById("blue").style.backgroundColor = "cornflowerblue";
        setTimeout(()=>{document.getElementById("blue").style.backgroundColor = "blue"} , 750);
        break;
      case 4:
        document.getElementById('greenSound').play();
        document.getElementById("green").style.backgroundColor = "lime";
        setTimeout(()=>{document.getElementById("green").style.backgroundColor = "green"} , 750);
        break;
      default:
        console.log('Error, note not found');
    }
  }
  currentlyPlaying = false;
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
function saveGame() {
  sendHttpRequest('POST', location.origin + '/save', {
    simonsave: {
      savestate: correctArray.join('')
    }
  }).then(response => {
    console.log(response);
    const savecode = JSON.parse(response).savecode;
    alert("Copy your savecode: " + savecode);
    document.getElementById("saveInput").value = savecode
  }).catch(err => {
    console.log(err);
  });
}
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open(method, url);
    if (data) {
      req.setRequestHeader('Content-Type', 'application/json');
    }
    req.onload = () => {
      if (req.status >= 400) {
        reject(req.response);
      } else {
        resolve(req.response);
      }
    };
    req.onerror = () => {
      reject('Something went wrong');
    };
    req.send(JSON.stringify(data));
  });
  return promise;
}
function loadGame() {
  sendHttpRequest('DELETE', location.origin + '/delete', {
    savecode: document.getElementById("saveInput").value
  }).then(response => {
    console.log(response);
     let saveString = JSON.parse(response).savestate;
     document.getElementById("saveInput").value = '';
     continueGame(saveString.split(''));
  }).catch(err => {
    console.log(err);
  });
}
function continueGame(continueArray) {
  correctArray = continueArray.map(numStr => parseInt(numStr));
  userArray = [];
  score = continueArray.length - 1;
  updateScore();
  gameFinished = false;
  currentlyPlaying = false;
  playCorrectArray();
}
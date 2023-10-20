const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const greater = document.querySelector('#greater-than');
const lesser = document.querySelector('#lesser-than');
const equal = document.querySelector('#equal-to');
const timer = document.querySelector('#timer');

let result = '';
var score = 0;
let countdown = 5;
let timerInterval;

function randomgenerator() {
  // stop ongoing timers to get 5 seconds for each question
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  const rand1 = Math.ceil(Math.random() * 1000);
  const rand2 = Math.ceil(Math.random() * 1000);
  
  //get the choices
  if (rand1 > rand2) result = 'greater';
  else if (rand1 < rand2) result = 'lower';
  else result = 'equal';
  //update qns
  number1.textContent = rand1;
  number2.textContent = rand2;

  countdown = 5;
  timerInterval = setInterval(updateTimer, 1000);
}

randomgenerator();

greater.onclick = () => {
  if (result === 'greater') {
    randomgenerator();
    score++;
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
};

lesser.onclick = () => {
  if (result === 'lower') {
    randomgenerator();
    score++;
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
};

equal.onclick = () => {
  if (result === 'equal') {
    randomgenerator();
    score++;
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
};

//timer function for 5 seconds each time 
function updateTimer() {
  timer.textContent = countdown;
  countdown--;

  if (countdown === -1) {
    clearInterval(timerInterval);
    window.location.href = './gameover.html';
  }
}
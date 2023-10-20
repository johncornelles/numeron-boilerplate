// gameover.html script
const playagain = document.querySelector('#play-again-button');
const scoreboard = document.querySelector('#score-board');
let playerscore = localStorage.getItem('score');

// Redirect to game page
playagain.onclick = () => {
  window.location.href = './game.html';
};

//if it is null set value as 0
if (playerscore === null){
    playerscore = 0
}
scoreboard.textContent = playerscore;

//clear the local storage everytime
localStorage.clear()
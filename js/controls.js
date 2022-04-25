const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const canvas = document.getElementById("canvas");
const restartButton = document.getElementById("restart-button");
const restartButton1 = document.getElementById("restart-button1");
const winScreen = document.getElementById("win-screen");
const gameOver = document.getElementById("lose-screen");
let game = null;

function startGame() {
  game = new Game();
  game.start();
  computerKey();
}

window.onload = () => {
  startButton.onclick = () => {
    winScreen.style.display = "none";
    gameOver.style.display = "none";
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    startGame();
  };
};

restartButton.onclick = () => {
  startScreen.style.display = "none";
  canvas.style.display = "flex";
  canvas.clearRect(0, 0, this.width, this.height);
  startGame();
};

restartButton1.onclick = () => {
  gameOver.style.display = "none";
  canvas.style.display = "flex";
  canvas.clearRect(0, 0, this.width, this.height);
  startGame();
};

function computerKey() {
  window.addEventListener("keydown", (e) => {
    console.log(game.questions[game.askedQuestions].answer);

    let keyPressed = e.code.charAt(e.code.length - 1);
    console.log(keyPressed);
    if (keyPressed === game.questions[game.askedQuestions].answer) {
      game.isCorrect();
    } else if (keyPressed !== game.questions[game.askedQuestions].answer) {
      game.isWrong();
      console.log(game.isWrong());
    }
  });
}

//|| timeInFrame > this.timeIntervalID also check lowercase

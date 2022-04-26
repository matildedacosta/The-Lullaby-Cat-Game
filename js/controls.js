const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const restartButton = document.getElementById("restart-button");
const restartButton1 = document.getElementById("restart-button1");
const winScreen = document.getElementById("win-screen");
const loseScreen = document.getElementById("lose-screen");

let game = null;

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  game = new Game();
  game.start();
})

restartButton.addEventListener("click", () => {
  winScreen.style.display = "none";
  game = new Game();
  game.start();
})

restartButton1.addEventListener("click", () => {
  loseScreen.style.display = "none";
  game = new Game();
  game.start();
})

  window.addEventListener("keydown", (e) => {
    console.log(game.questions[game.askedQuestions].answer);

    let keyPressed = e.code.charAt(e.code.length - 1);
    console.log(keyPressed);
    if (keyPressed === game.questions[game.askedQuestions].answer) {
      game.isCorrect();
    } else if (keyPressed !== game.questions[game.askedQuestions].answer) {
      game.isWrong();
    }
  });

const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const restartWinButton = document.getElementById("restart-win-button");
const restartLoseButton = document.getElementById("restart-lose-button");
const winScreen = document.getElementById("win-level1-screen");
const loseScreen = document.getElementById("lose-screen");
const levelsScreen = document.getElementById("levels-screen");
const level1Button = document.getElementById("level1-button");
const level2Button = document.getElementById("level2-button");
const nextLevel2 = document.getElementById("next-level2");

let game = null;
let level2 = null;

//StartScreen
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "flex";
});

//LevelsScreen
level1Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelOneQuestions);
  game.start();
});

level2Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelTwoQuestions);
  game.start();
});

//EndingScreens
nextLevel2.addEventListener("click", () => {
  game = new Game(levelTwoQuestions);
  game.start();
});

restartWinButton.addEventListener("click", () => {
  winScreen.style.display = "none";
  game = new Game(levelOneQuestions);
  game.start();
});

restartLoseButton.addEventListener("click", () => {
  loseScreen.style.display = "none";
  game = new Game(levelOneQuestions);
  game.start();
});

//Controls for the keyboard

window.addEventListener("keydown", (e) => {
  let keyPressed = e.code.charAt(e.code.length - 1);
  let possibleKeys = [
    "A",
    "W",
    "S",
    "E",
    "D",
    "F",
    "T",
    "G",
    "Y",
    "H",
    "U",
    "J",
  ];
  if (!possibleKeys.includes(keyPressed)) return;
  if (keyPressed === game.questions[game.askedQuestions].answer) {
    game.isCorrect();
  } else if (keyPressed !== game.questions[game.askedQuestions].answer) {
    game.isWrong();
  }
});

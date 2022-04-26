//MAIN SCREENS
const startScreen = document.getElementById("start-screen");
const levelsScreen = document.getElementById("levels-screen");
/* BUTTONS */
const startButton = document.getElementById("start-button");
const level1Button = document.getElementById("level1-button");
const level2Button = document.getElementById("level2-button");

//LEVEL ONE
const winScreenLevel1 = document.getElementById("win-level1-screen");
const loseScreenLevel1 = document.getElementById("lose-level1-screen");
/* BUTTONS */
const nextLevel2Button = document.getElementById("next-level2");
const restartLevel1WinButton = document.getElementById(
  "restart-level1-win-button"
);
const restartLevel1LoseButton = document.getElementById(
  "restart-level1-lose-button"
);

//LEVEL TWO
const loseScreenLevel2 = document.getElementById("lose-level2-screen");
const winScreenLevel2 = document.getElementById("win-level2-screen");
/* BUTTONS */
const restartLevelTwoWinButton = document.getElementById(
  "restart-win-level2-button"
);
const restartLevelTwoLoseButton = document.getElementById(
  "restart-lose-level2-button"
);
const backToLevelOneButton = document.getElementById("back-to-level1-button");

/* VARIABLE TO ENABLE NEW GAME IN EVENTS */
let game = null;

/* EVENTS */

//StartScreen
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "flex";
});

//LevelsScreen
level1Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323");
  game.start();
});

level2Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "35px VT323");
  game.start();
});

/* EndingScreens */

//LEVEL ONE BUTTONS
restartLevel1WinButton.addEventListener("click", () => {
  winScreenLevel1.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323");
  game.start();
});

restartLevel1LoseButton.addEventListener("click", () => {
  loseScreenLevel1.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323");
  game.start();
});
nextLevel2Button.addEventListener("click", () => {
  winScreenLevel1.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323");
  game.start();
});

//LEVEL TWO BUTTONS
restartLevelTwoWinButton.addEventListener("click", () => {
  winScreenLevel2.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323");
  game.start();
});

restartLevelTwoLoseButton.addEventListener("click", () => {
  winScreenLevel2.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323");
  game.start();
});

backToLevelOneButton.addEventListener("click", () => {
  loseScreenLevel2.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323");
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

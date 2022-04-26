/* SCREENS */
const startScreen = document.getElementById("start-screen");
const winScreenLevel1 = document.getElementById("win-level1-screen");
const loseScreenLevel1 = document.getElementById("lose-level1-screen");
const levelsScreen = document.getElementById("levels-screen");

/* BUTTONS */
const startButton = document.getElementById("start-button");
const level1Button = document.getElementById("level1-button");
const level2Button = document.getElementById("level2-button");
const nextLevel2Button = document.getElementById("next-level2");
const restartLevel1WinButton = document.getElementById(
  "restart-level1-win-button"
);
const restartLevel1LoseButton = document.getElementById(
  "restart-level1-lose-button"
);

/* VARIABLE TO ENABLE NEW GAME IN EVENTS */
let game = null;

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

//NEXT LEVEL
nextLevel2Button.addEventListener("click", () => {
  winScreenLevel1.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "35px VT323");
  game.start();
});

//LEVEL ONE
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

//LEVEL TWO

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

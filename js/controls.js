//MAIN SCREENS
const startScreen = document.getElementById("start-screen");
const levelsScreen = document.getElementById("levels-screen");
/* BUTTONS */
const startButton = document.getElementById("start-button");
const level1Button = document.getElementById("level1-button");
const level2Button = document.getElementById("level2-button");
const level3Button = document.getElementById("level3-button");
const level4Button = document.getElementById("level4-button");

//LEVEL 1
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

//LEVEL 2
const loseScreenLevel2 = document.getElementById("lose-level2-screen");
const winScreenLevel2 = document.getElementById("win-level2-screen");
/* BUTTONS */
const nextLevel3Button = document.getElementById("next-level3");
const restartLevel2WinButton = document.getElementById(
  "restart-win-level2-button"
);
const restartLevel2LoseButton = document.getElementById(
  "restart-lose-level2-button"
);
const backToLevel1Button = document.getElementById("back-to-level1-button");

/* LEVEL 3 */
const loseScreenLevel3 = document.getElementById("lose-level3-screen");
const winScreenLevel3 = document.getElementById("win-level3-screen");
/* BUTTONS */
const nextLevel4Button = document.getElementById("next-level4");
const restartLevel3WinButton = document.getElementById(
  "restart-win-level3-button"
);
const restartLevel3LoseButton = document.getElementById(
  "restart-lose-level3-button"
);
const backToLevel2Button = document.getElementById("back-to-level2-button");

/* LEVEL 4 */
const loseScreenLevel4 = document.getElementById("lose-level4-screen");
const winScreenLevel4 = document.getElementById("win-level4-screen");
/* BUTTONS */
const restartLevel4WinButton = document.getElementById(
  "restart-win-level4-button"
);
const restartLevel4LoseButton = document.getElementById(
  "restart-lose-level4-button"
);
const backToLevel3Button = document.getElementById("back-to-level3-button");

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
  game = new Game(levelOneQuestions, 1, "50px VT323", 12);
  game.start();
});

level2Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "35px VT323", 12);
  game.start();
});

level3Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelThreeQuestions, 3, "50px VT323", 7);
  game.start();
});

level4Button.addEventListener("click", () => {
  startScreen.style.display = "none";
  levelsScreen.style.display = "none";
  game = new Game(levelFourQuestions, 4, "50px VT323", 24);
  game.start();
});

/* EndingScreens */

//LEVEL 1 BUTTONS
restartLevel1WinButton.addEventListener("click", () => {
  winScreenLevel1.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323", 12);
  game.start();
});

restartLevel1LoseButton.addEventListener("click", () => {
  loseScreenLevel1.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323", 12);
  game.start();
});
nextLevel2Button.addEventListener("click", () => {
  winScreenLevel1.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323", 12);
  game.start();
});

//LEVEL 2 BUTTONS
restartLevel2WinButton.addEventListener("click", () => {
  winScreenLevel2.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323", 12);
  game.start();
});

restartLevel2LoseButton.addEventListener("click", () => {
  loseScreenLevel2.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323", 12);
  game.start();
});

backToLevel1Button.addEventListener("click", () => {
  loseScreenLevel2.style.display = "none";
  game = new Game(levelOneQuestions, 1, "50px VT323", 12);
  game.start();
});
nextLevel3Button.addEventListener("click", () => {
  winScreenLevel2.style.display = "none";
  game = new Game(levelThreeQuestions, 3, "50px VT323", 7);
  game.start();
});

//LEVEL 3 BUTTONS
restartLevel3WinButton.addEventListener("click", () => {
  winScreenLevel3.style.display = "none";
  game = new Game(levelThreeQuestions, 3, "50px VT323", 7);
  game.start();
});

restartLevel3LoseButton.addEventListener("click", () => {
  loseScreenLevel3.style.display = "none";
  game = new Game(levelThreeQuestions, 3, "50px VT323", 7);
  game.start();
});

backToLevel2Button.addEventListener("click", () => {
  loseScreenLevel3.style.display = "none";
  game = new Game(levelTwoQuestions, 2, "30px VT323", 12);
  game.start();
});
nextLevel4Button.addEventListener("click", () => {
  winScreenLevel3.style.display = "none";
  game = new Game(levelFourQuestions, 4, "50px VT323", 12);
  game.start();
});

//LEVEL 4 BUTTONS

restartLevel4WinButton.addEventListener("click", () => {
  winScreenLevel4.style.display = "none";
  game = new Game(levelFourQuestions, 4, "50px VT323", 12);
  game.start();
});

restartLevel4LoseButton.addEventListener("click", () => {
  loseScreenLevel4.style.display = "none";
  game = new Game(levelFourQuestions, 4, "50px VT323", 12);
  game.start();
});

backToLevel3Button.addEventListener("click", () => {
  loseScreenLevel4.style.display = "none";
  game = new Game(levelFourQuestions, 3, "30px VT323", 7);
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
  if (game.level === 3) {
    game.keysDown.push(e.code);
    console.log(game.keysDown);
    console.log(
      game.keysDown.includes(game.questions[game.askedQuestions].answer[0])
    );

    if (game.keysDown.length === 3) {
      if (
        game.keysDown.includes(game.questions[game.askedQuestions].answer[0]) &&
        game.keysDown.includes(game.questions[game.askedQuestions].answer[1]) &&
        game.keysDown.includes(game.questions[game.askedQuestions].answer[2])
      ) {
        console.log("right");
        game.isCorrect();
      } else {
        console.log("wrong");
        game.isWrong();
      }
    }
  } else {
    if (keyPressed === game.questions[game.askedQuestions].answer) {
      game.isCorrect();
    } else if (keyPressed !== game.questions[game.askedQuestions].answer) {
      game.isWrong();
    }
  }
});

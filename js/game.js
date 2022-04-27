//Put sounds in questions
//Put ambient sound in the whole game
//Put captions in the levels section
//Change 'you win' and 'you lose' to more exciting images
//put sound with the game over and win game
//CheckWin()
//CheckLose()

class Game {
  constructor(initialQuestions, level, font, numberOfQuestions) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 950;
    this.height = 700;
    this.cat = null;
    this.bed = null;
    this.sound = new Audio();
    this.bgSound = new Audio("docs/assets/sounds/ambient-sound.wav");
    this.initialQuestions = initialQuestions;
    this.questions = [];
    this.rightQuestions = 0;
    this.wrongQuestions = 0;
    this.askedQuestions = 0;
    this.intervalId = null;
    this.questionTime = 0;
    this.numberOfQuestions = numberOfQuestions;
    this.level = level;
    this.font = font;
    this.keysDown = [];
  }

  update() {
    this.questionTime++;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.bed.draw();
    this.cat.draw();
    this.drawQuestions(this.questions[this.askedQuestions]);
    this.drawScore();
    this.drawTimer(Math.floor(this.questionTime / 60));
    this.checkLevels();
    this.checkGameover();
    this.checkWin();
  }

  start() {
    this.bgSound.play();
    this.bgSound.loop = true;
    this.canvas.style.display = "flex";
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.questionsRandomizer();
    this.drawQuestions(this.questions[0]);
    this.cat = new Cat(this, 820, 590, 130, 130);
    this.bed = new Bed(this, 35, 630, 125, 60);
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  checkLevels() {
    if (this.level === 1) {
      if (this.questionTime > 600) {
        this.isWrong();
      }
    } else if (this.level === 2) {
      if (this.questionTime > 1200) {
        this.isWrong();
      }
    } else if (this.level === 3) {
      if (this.questionTime > 1800) {
        this.isWrong();
      }
    } else if (this.level === 4) {
      if (this.questionTime > 2400) {
        this.isWrong();
      }
    }
  }

  isCorrect() {
    this.askedQuestions++;
    this.cat.x -= 75;
    this.sound;
    this.rightQuestions += 1;
    this.questionTime = 0;
    this.sound.src = "docs/assets/sounds/cat-meow.wav";
    this.sound.loop = false;
    this.sound.play();
    this.keysDown = [];
  }

  isWrong() {
    this.askedQuestions++;
    if (this.cat.x + this.cat.width < this.width) {
      this.cat.x += 75;
    }
    this.sound.src = "docs/assets/sounds/cat-hiss.wav";
    this.sound.loop = false;
    this.sound.play();
    this.wrongQuestions += 1;
    this.questionTime = 0;
    this.keysDown = [];
  }

  checkGameover() {
    if (this.level === 1 && this.wrongQuestions >= 3) {
      const loseScreenLevel1 = document.getElementById("lose-level1-screen");
      this.canvas.style.display = "none";
      loseScreenLevel1.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-hiss.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 2 && this.wrongQuestions >= 3) {
      const loseScreenlevel2 = document.getElementById("lose-level2-screen");
      this.canvas.style.display = "none";
      loseScreenlevel2.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-hiss.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 3 && this.wrongQuestions >= 3) {
      const loseScreenlevel3 = document.getElementById("lose-level3-screen");
      this.canvas.style.display = "none";
      loseScreenlevel3.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-hiss.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 4 && this.wrongQuestions >= 3) {
      const loseScreenlevel4 = document.getElementById("lose-level4-screen");
      this.canvas.style.display = "none";
      loseScreenlevel4.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-hiss.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    }
  }

  checkWin() {
    if (this.level === 1 && this.rightQuestions >= 15) {
      const winScreenLevel1 = document.getElementById("win-level1-screen");
      this.canvas.style.display = "none";
      winScreenLevel1.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-purr.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 2 && this.rightQuestions >= 9) {
      const winScreenLevel2 = document.getElementById("win-level2-screen");
      this.canvas.style.display = "none";
      winScreenLevel2.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-purr.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 3 && this.rightQuestions >= 5) {
      const winScreenLevel3 = document.getElementById("win-level3-screen");
      this.canvas.style.display = "none";
      winScreenLevel3.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-purr.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    } else if (this.level === 4 && this.rightQuestions >= 9) {
      const winScreenLevel4 = document.getElementById("win-level4-screen");
      this.canvas.style.display = "none";
      winScreenLevel4.style.display = "flex";
      this.sound.src = "docs/assets/sounds/cat-purr.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    }
  }

  clear() {
    clearInterval(this.intervalId);
  }

  drawQuestions(question) {
    this.ctx.font = this.font;
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText(question.question, 450, 350);
  }

  drawScore() {
    this.ctx.font = "40px VT323";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      `${this.rightQuestions} / ${this.numberOfQuestions}`,
      875,
      40
    );
  }

  drawTimer(timer) {
    this.ctx.font = "40px VT323";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Timer: ${timer}`, 80, 40);
  }

  questionsRandomizer() {
    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }
    this.questions = shuffle(this.initialQuestions);
  }
}

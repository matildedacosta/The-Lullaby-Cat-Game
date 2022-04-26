//Resolver problema das perguntas (não está a fazer sentido- o gato não chega à cama sempre. porquê?)
//Fazer com que apareça o gato na cama primeiro E depois fazer o swap de screens
//Adicionar sons

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 950;
    this.height = 700;
    this.cat = null;
    this.bed = null;
    this.sound = new Audio();
    //this.sound.volume = 0.1;
    this.questions = [];
    this.rightQuestions = 0;
    this.wrongQuestions = 0;
    this.askedQuestions = 0;
    this.intervalId = null;
    this.questionTime = 0;
  }

  update() {
    this.questionTime++;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.bed.draw();
    this.cat.draw();
    this.drawQuestions(this.questions[this.askedQuestions]);
    this.drawScore();
    this.drawTimer(Math.floor(this.questionTime / 60));
    if (this.questionTime > 600) {
      this.isWrong();
    }
    this.checkGameover();
    this.checkWin();
  }

  start() {
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

  isCorrect() {
    this.askedQuestions++;
    this.cat.x -= 75;
    this.sound;
    this.rightQuestions += 1;
    this.questionTime = 0;
    this.sound.src = "/docs/assets/sounds/cat-meow.wav";
    this.sound.loop = false;
    this.sound.play();
  }

  isWrong() {
    this.askedQuestions++;
    if (this.cat.x + this.cat.width < this.width) {
      this.cat.x += 75;
    }
    this.sound.src = "/docs/assets/sounds/cat-hiss.wav";
    this.sound.loop = false;
    this.sound.play();
    this.wrongQuestions += 1;
    this.questionTime = 0;
  }

  checkGameover() {
    const loseScreen = document.getElementById("lose-screen");
    if (this.wrongQuestions >= 3) {
      this.canvas.style.display = "none";
      loseScreen.style.display = "flex";
      this.sound.src = "/docs/assets/sounds/cat-hiss.wav";
      this.sound.loop = false;
      this.sound.play();
      this.clear();
    }
  }

  checkWin() {
    const winScreen = document.getElementById("win-screen");
    if (this.rightQuestions >= 9) {
      this.canvas.style.display = "none";
      winScreen.style.display = "flex";
      this.clear();
      this.sound.src = "/docs/assets/sounds/cat-purr.wav";
      this.sound.loop = false;
      this.sound.play();
    }
  }

  clear() {
    clearInterval(this.intervalId);
  }

  drawQuestions(question) {
    this.ctx.font = "50px VT323";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(question.question, 235, 350);
  }

  drawScore() {
    this.ctx.font = "40px VT323";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.rightQuestions} / 12`, 830, 40);
  }

  drawTimer(timer) {
    this.ctx.font = "40px VT323";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Timer: ${timer}`, 30, 40);
  }

  questionsRandomizer() {
    const initialQuestions = [
      { question: "Press the musical note C", answer: "A" },
      { question: "Press the musical note C#/Db", answer: "W" },
      { question: "Press the musical note D", answer: "S" },
      { question: "Press the musical note D#/Eb", answer: "E" },
      { question: "Press the musical note E", answer: "D" },
      { question: "Press the musical note F", answer: "F" },
      { question: "Press the musical note F#/Gb", answer: "T" },
      { question: "Press the musical note G", answer: "G" },
      { question: "Press the musical note G#/Ab", answer: "Y" },
      { question: "Press the musical note A", answer: "H" },
      { question: "Press the musical note A#/Bb", answer: "U" },
      { question: "Press the musical note B", answer: "J" },
    ];

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
    this.questions = shuffle(initialQuestions);
  }
}

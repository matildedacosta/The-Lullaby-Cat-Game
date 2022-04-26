class Cat {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }

  draw() {
    this.img.src = "../docs/assets/images/cat.gif";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Bed {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }
  draw() {
    this.img.src = "../docs/assets/images/bed.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

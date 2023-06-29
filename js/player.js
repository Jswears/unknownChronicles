class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.gameCanvas = document.querySelector("#game-container");
    this.width = 40;
    this.height = 40;
    this.top = 550;
    this.left = 480;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = "./resources/img/AdeptNecromancerIdle.gif";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameCanvas.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.left < 32) {
      this.left = 32;
    }
    if (this.top < 32) {
      this.top = 32;
    }
    // handles right hand side
    if (this.left > this.gameScreen.offsetWidth - this.width - 32) {
      this.left = this.gameScreen.offsetWidth - this.width - 32;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 32) {
      this.top = this.gameScreen.offsetHeight - this.height - 32;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}

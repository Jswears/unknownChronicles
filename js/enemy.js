class Enemies {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.gameCanvas = document.querySelector("#game-container");
    this.top = Math.floor(Math.random() * (540 - 0) + 0);
    this.left = Math.floor(Math.random() * (760 - 0) + 0);
    this.width = 50;
    this.height = 50;
    this.health = 20;
    this.element = document.createElement("img");

    this.element.src = "./resources/img/FireElementalIdle.gif";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.explosionElement = document.createElement("img");
    this.explosionElement.src = "./resources/img/cloud_gloom_new.png";
    this.explosionElement.style.position = "absolute";
    this.explosionElement.style.width = "30px";
    this.explosionElement.style.height = "30px";
    this.explosionElement.style.display = "none";
    this.explosionElement.style.zIndex = "9999";

    this.gameCanvas.appendChild(this.explosionElement);
    this.gameCanvas.appendChild(this.element);

    let attackSound = new Audio("./resources/sounds/hit_enemy.wav");
    attackSound.volume = 0.2;
    this.element.addEventListener("click", () => {
      this.health -= 10;
      if (this.health <= 0) {
        this.element.remove();
      }
      this.explosionElement.style.top = `${this.top}px`;
      this.explosionElement.style.left = `${this.left}px`;
      this.explosionElement.style.display = "block";
      attackSound.play();

      // Hide explosion element after a delay
      setTimeout(() => {
        this.explosionElement.style.display = "none";
      }, 1000);
    });
  }

  move() {
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}

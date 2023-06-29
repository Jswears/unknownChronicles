const gameScreen = document.querySelector("#game-screen");
const ctx = gameScreen.getContext("2d");

// Game class
class Game {
  constructor() {
    // Game elements
    this.startScreen = document.getElementById("main-screen");
    this.gameScreen = gameScreen;
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.winScreen = document.getElementById("you-win");
    this.getLives = document.getElementById("lives");
    this.getScore = document.getElementById("score");
    this.getFullTextScore = document.querySelector(".score");
    // Player-Boss
    this.player = new Player(this.gameScreen);
    this.obstacles = [];
    // Game properties
    this.width = 960;
    this.height = 640;
    this.isGameOver = false;
    this.youWon = false;
    this.score = 0;
    this.lives = 3;
    this.frameCount = 0;
  }

  // Start the game
  start() {
    this.renderMap();
    this.gameLoop();
  }

  // Renders the map
  renderMap() {
    // Set game size
    this.gameScreen.width = this.width;
    this.gameScreen.height = this.height;

    // Hiding-showing screens
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameContainer.style.display = "block";
    this.getLives.style.display = "flex";
    this.getFullTextScore.style.display = "block";

    // Draws the map on the screen
    const map = new Image();
    map.src = "./resources/img/finalev4.png";
    map.onload = () => {
      ctx.drawImage(map, 0, 0);
    };
  }

  // Updates the game
  gameLoop() {
    this.update();

    this.frameCount = (this.frameCount || 0) + 1;

    if (this.frameCount % 100 === 0) {
      this.obstacles.push(new Enemies(this.gameScreen));
    }

    if (this.isGameOver) {
      this.endGame();
    }
    if (this.youWon) {
      this.youWonGame();
    } else {
      requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    this.player.move();
    const obstaclesToKeep = [];

    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        this.lives -= 1;
        this.getLives.removeChild(this.getLives.lastElementChild);
        obstacle.element.remove();
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });

    this.obstacles = obstaclesToKeep;

    // Increment score when obstacle is removed by the player's click
    const obstaclesToRemove = this.obstacles.filter(
      (obstacle) => obstacle.health <= 0
    );
    obstaclesToRemove.forEach((obstacle) => {
      this.score += 1;
      this.getScore.textContent = this.score; // Update the score in the DOM
      obstacle.element.remove();
    });

    this.obstacles = this.obstacles.filter((obstacle) => obstacle.health > 0);

    if (this.lives <= 0) {
      this.isGameOver = true;
    }
    if (this.score >= 10) {
      this.youWon = true;
    }
  }

  endGame() {
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });
    this.obstacles = [];

    // Remove the player
    this.player.element.remove();

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.getLives.style.display = "none";
    this.getFullTextScore.style.display = "none";
  }

  youWonGame() {
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });
    this.obstacles = [];

    // Remove the player
    this.player.element.remove();
    // Reset score and lives
    this.score = 0;
    this.lives = 3;
    this.getLives.style.display = "none";
    this.getFullTextScore.style.display = "none";
    this.gameScreen.style.display = "none";
    this.winScreen.style.display = "flex";
  }
}

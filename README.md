# unknownChronicles

## DESCRIPTION

---

The game is based on childhood memories playing games like Zelda a Link to the Past, in this case is adapted to be a simple click-on enemy to eliminate them.

## MAIN FUNCTIONALITIES

---

- Player can move in all directions
- Enemies spawn randomly within the map
- Contact with enemy discounts 1 life
- With a click you interact and kill the enemy
- There is a clear border
- Each enemy killed gives 1 point
- After reaching 10 points win screen appears
- After loosing 3 lives, end-screen appears
- Restart button to play again.

## BACKLOG FUNCTIONNALITIES

---

- Add different enemies
- Add boss after killing 10 enemies
- Increase difficulty little by little
- Add movement to the enemies and bosses
- Shooting system instead of clicking
- Add more obstacles in the map
- Add sounds when hit by enemy

## TECHNOLOGIES USED

---

- HTML
- CSS
- JAVASCRIPT
- DOM Manipulation
- JS Canvas
- JS Classes
- JS Audio and JS Image()

## STATES

---

- Start screen
- Game screen
- Win screen
- Game over screen

## STRUCTURE

---

### enemy.js

---

- Enemies()
  - this.gameScreen;
  - this.gameCanvas;
  - this.element;
  - this.explosionElement
  - attackSound;
  - this.element.addEventlistener()
  - attackSound.play()
  - move()
  - updatePosition()

### game.js

---

const gameScreen;
const ctx;

- Game();

  - this.startScreen;
  - this.gameScreen;
  - this.gameContainer;
  - this.gameEndScreen;
  - this.winScreen;
  - this.getLives;
  - this.getScore;
  - this.getFullTextScore;
  - this.player;
  - this.obstacles;
  - this.isGameOver;
  - this.youWon;
  - this.lives;
  - this.framecount;

- start()
- renderMap()
- gameLoop()
- update()
- endGame()
- youWonGame()

### player.js

---

- Player()

  - this.gameScreen;
  - this.gameCanvas;
  - this.directionX;
  - this.directionY;
  - this.element;

- move()
- updatePosition()
- didCollide()

### script.js

---

- const startButton;
- const restartButton;
- let game;

## Extra Links

---

#### Trello

[Link](https://trello.com/b/aRvIWKnM/game-project)

#### Slides

COMING SOON

### Deploy

[Link](https://jswears.github.io/unknownChronicles/)

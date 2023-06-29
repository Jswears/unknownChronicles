window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const playAgainButton = document.getElementById("play-again-button");
  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
      if (possibleKeystrokes.includes(key)) {
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            game.player.element.style.transform = "scaleX(-1)";
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            game.player.element.style.transform = "scaleX(1)";
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
        console.log(game.player.directionX, game.player.directionY);
      }
    });
    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];

      if (possibleKeystrokes.includes(key)) {
        // Update player's directionX and directionY based on the key pressed
        switch (key) {
          case "ArrowLeft":
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    });
  }

  startButton.addEventListener("click", function () {
    startGame();
    let mySound = new Audio("./resources/sounds/11 - Magician's Tower.mp3");
    mySound.loop = true;
    mySound.volume = 0.2;

    mySound.addEventListener("timeupdate", function () {
      if (mySound.currentTime >= mySound.duration - 0.5) {
        mySound.currentTime = 0;
      }
    });
    mySound.play();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });
  playAgainButton.addEventListener("click", () => {
    location.reload();
  });
});

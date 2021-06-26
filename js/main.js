import Game from "./Game.js";
import GameView from "./GameView.js";

// Initialising the Game
let game = new Game();
const gameView = new GameView();

// Provide the onclick event to each board tile
const tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

// Call when click on any tile
const onTileClick = (idx) => {
  game.makeMove(idx);
  gameView.updateBoard(game);
};

// when player clicks on "Start a New Game"
document.querySelector(".restart").addEventListener("click", () => {
  game = new Game();
  gameView.updateBoard(game);

  const tiles = document.querySelectorAll('.board-tile');
  tiles.forEach((tile) => {
    tile.classList.remove("tile-winner");
  });
});

// To Load the GameView on the onloading point
gameView.updateBoard(game)
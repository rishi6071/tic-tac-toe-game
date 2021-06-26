export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn === "X") this.turn = "O";
    else this.turn = "X";
  }

  makeMove(idx) {
    // if already found the winning combination then stop move
    if (this.endGame()) return;

    // Only update if tile is blank
    if (this.board[idx]) return;

    this.board[idx] = this.turn;
    let winningCombination = this.findWinningCombinations();

    // If there is no Winning Combination then only provide the turn
    if (!winningCombination) {
      // if all tiles filled but still didn't get the Winner
      if (!this.board.includes(null))
        document.querySelector("#result-status").innerText = `"TIE"`;

      this.nextTurn();
    }
  }

  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      // if a exists then check all of them are having same player or not?
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return combination;
      }
    }

    // if no winning combination found for the current turn
    return null;
  }

  endGame() {
    let winningCombination = this.findWinningCombinations();

    // if winning combination found then endOfGame
    if (winningCombination) return true;
    else return false;
  }
}

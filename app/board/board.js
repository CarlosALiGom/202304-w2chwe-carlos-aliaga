import Cell from "../cell/cell.js";

class World {
  board;

  constructor(totalRow, totalCol) {
    this.board = this.createBoard(totalRow, totalCol);
  }

  createBoard(totalRow, totalCol) {
    const board = [];

    for (let rowIndex = -1; rowIndex < totalRow; rowIndex++) {
      const row = [];

      for (let colIndex = -1; colIndex < totalCol; colIndex++) {
        row.push(new Cell(colIndex, rowIndex));
      }

      board.push(row);
    }

    return board;
  }

  countLiveNeighbours(board, cellX, cellY) {
    let countAlive = 0;
    for (let i = cellY - 1; i <= cellY + 1; i++) {
      for (let j = cellX - 1; j <= cellX + 1; j++) {
        if (board[i][j].isAlive === true) {
          countAlive++;
          console.log(i, j);
        }
      }
    }

    if (board[cellX][cellY].isAlive === true) {
      countAlive--;
    }

    return countAlive;
  }
}

export default World;

const newWorld = new World(1, 1);
console.log(newWorld.board);
const result = newWorld.countLiveNeighbours(newWorld.board, 1, 1);
console.log(result);

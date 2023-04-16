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
    const totalRow = 4;
    const totalCol = 4;
    for (let i = cellX - 1; i <= cellX + 1 && i <= totalRow; i++) {
      for (let j = cellY - 1; j <= cellY + 1 && j <= totalCol; j++) {
        if (i < 0 || j < 0) {
          continue;
        } else if (board[i][j].isAlive === true) {
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

const newWorld = new World(4, 4);
console.table(
  newWorld.board.map((element) => element.map((index) => index.isAlive))
);
const result1 = newWorld.countLiveNeighbours(newWorld.board, 4, 4);

console.log(result1);

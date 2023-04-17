import Cell from "../cell/cell.js";

class World {
  board;
  totalRows;
  totalCols;

  constructor(totalRow, totalCol) {
    this.board = this.createBoard(totalRow, totalCol);
    this.totalCols = totalCol;
    this.totalRows = totalRow;
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
    for (let i = cellX - 1; i <= cellX + 1 && i <= this.totalRows; i++) {
      for (let j = cellY - 1; j <= cellY + 1 && j <= this.totalCols; j++) {
        if (i < 0 || j < 0) {
          continue;
        } else if (board[i][j].isAlive === true) {
          countAlive++;
        }
      }
    }

    if (board[cellX][cellY].isAlive === true) {
      countAlive--;
    }

    if (
      board[cellX][cellY].isAlive === true &&
      (countAlive > 3 || countAlive < 2)
    ) {
      return new Cell(cellX, cellY, false);
    }

    if (board[cellX][cellY].isAlive === false && countAlive === 3) {
      return new Cell(cellX, cellY, true);
    }

    return new Cell(cellX, cellY);
  }

  nextGeneration(board) {
    const newBoard = [];
    for (let row = 0; row <= this.totalRows; row++) {
      const newRow = [];
      for (let column = 0; column <= this.totalCols; column++) {
        newRow.push(this.countLiveNeighbours(board, row, column));
      }

      newBoard.push(newRow);
    }

    console.log(newWorld.board);
    return newBoard;
  }
}

export default World;

const newWorld = new World(4, 4);
console.table(
  newWorld.board.map((element) => element.map((index) => index.isAlive))
);
/* NewWorld.countLiveNeighbours(newWorld.board, 2, 2);
newWorld.countLiveNeighbours(newWorld.board, 2, 3);
newWorld.countLiveNeighbours(newWorld.board, 2, 4); */
const newNewWorld = newWorld.nextGeneration(newWorld.board);
console.log(newNewWorld);
console.table(
  newNewWorld.newWorld.map((element) => element.map((index) => index.isAlive))
);

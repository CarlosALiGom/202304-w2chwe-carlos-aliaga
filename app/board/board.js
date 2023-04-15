import Cell from "../cell/cell";
const createBoard = (totalRow, totalCol) => {
  const table = [];

  for (let rowIndex = -1; rowIndex < totalRow; rowIndex++) {
    const row = [];

    for (let colIndex = -1; colIndex < totalCol; colIndex++) {
      row.push(new Cell(colIndex, rowIndex));
    }

    table.push(row);
  }

  return table;
};

const tablero = createBoard(2, 2);

tablero[0][0].die();
console.table(tablero);

export default createBoard;

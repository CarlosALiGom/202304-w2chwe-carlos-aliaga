import Cell from "../cell/cell";

class World {
  table;

  createBoard(totalRow, totalCol) {
    const table = [];

    for (let rowIndex = -1; rowIndex < totalRow; rowIndex++) {
      const row = [];

      for (let colIndex = -1; colIndex < totalCol; colIndex++) {
        row.push(new Cell(colIndex, rowIndex));
      }

      table.push(row);
    }

    return table;
  }
}

export default World;

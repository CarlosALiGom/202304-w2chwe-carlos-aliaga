import Cell from "../cell/cell";
import createBoard from "./board";

describe("Given a function called createBoard", () => {
  describe("When it recieve (2,2)", () => {
    test("Then it should return a length 3", () => {
      const rowNumber = 2;
      const colNumber = 2;
      const newBoard = createBoard(rowNumber, colNumber);

      const expectedResult = 3;

      const result = newBoard.length;
      expect(expectedResult).toBe(result);
    });
  });

  describe("When it recieve (2,2)", () => {
    test("Then it should return a 3x3 bidimensional array", () => {
      const rowNumber = 2;
      const colNumber = 2;

      const expectedResult = [
        [new Cell(-1, -1), new Cell(0, -1), new Cell(1, -1)],
        [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0)],
        [new Cell(-1, 1), new Cell(0, 1), new Cell(1, 1)],
      ];

      const result = createBoard(rowNumber, colNumber);

      expect(expectedResult).toEqual(result);
    });
  });
});

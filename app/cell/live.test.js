import Cell from "./cell";
describe("Given a class called Cell", () => {
  describe("When it gets implemented the method die", () => {
    test("Then it should change his property isAlive to false", () => {
      const newCell = new Cell(0, 0);
      newCell.die();
      newCell.live();
      const expectedResult = true;

      const result = newCell.isAlive;

      expect(expectedResult).toBe(result);
    });
  });
});

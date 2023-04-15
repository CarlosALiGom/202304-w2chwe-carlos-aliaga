import Cell from "./cell";
describe("Given a class called Cell", () => {
  describe("When it gets implemented the method die", () => {
    test("then it should change his property isAlive to false", () => {
      const newCell = new Cell();
      newCell.die();
      const expectedResult = false;

      const result = newCell.isAlive;

      expect(expectedResult).toBe(result);
    });
  });
});

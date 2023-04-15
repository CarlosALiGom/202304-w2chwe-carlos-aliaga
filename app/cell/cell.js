class Cell {
  positionY;
  positionX;
  isAlive = true;

  constructor(positionY, positionX) {
    this.positionY = positionY;
    this.positionX = positionX;
  }

  die() {
    this.isAlive = false;
  }
}

export default Cell;

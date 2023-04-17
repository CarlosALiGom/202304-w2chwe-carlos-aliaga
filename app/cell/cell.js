class Cell {
  positionY;
  positionX;
  isAlive;

  constructor(positionY, positionX, isAlive = true) {
    this.positionY = positionY;
    this.positionX = positionX;
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  live() {
    this.isAlive = true;
  }
}

export default Cell;

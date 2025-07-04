import { Cell } from './Cell.ts'
import { Colors } from './Colors.ts'

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // black cells
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // white cells
        }
      }

      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x]
  }
}

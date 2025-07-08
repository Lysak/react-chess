import type { Board } from './Board.ts'
import { type Color, Colors } from './Colors.ts'
import type { Figure } from './figures/Figure.ts'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Color
  figure: Figure | null
  board: Board
  available: boolean
  id: number

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Color,
    figure: Figure | null,
  ) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.board = board
    this.available = false
    this.id = Math.random()
  }

  isEmpty(): boolean {
    return this.figure === null
  }

  isEnemy(target: Cell): boolean {
    if (target.figure) {
      return target.figure?.color !== this.figure?.color
    }
    return false
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false
    }
    const min = Math.min(this.y, this.y)
    const max = Math.max(this.y, this.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false
      }
    }

    return true
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) {
      return false
    }
    const min = Math.min(this.x, this.x)
    const max = Math.max(this.x, this.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false
      }
    }

    return true
  }

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x)
    const absY = Math.abs(target.y - this.y)
    if (absY !== absX) {
      return false
    }

    const dx = this.x < target.x ? 1 : -1
    const dy = this.y < target.y ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false
      }
    }

    return true
  }

  setFigure(figure: Figure) {
    this.figure = figure
    this.figure.cell = this
  }

  addLostFigure(figure: Figure) {
    if (figure.color === Colors.BLACK) {
      this.board.lostBlackFigures.push(figure)
    } else {
      this.board.lostWhiteFigures.push(figure)
    }
  }
  moveFigure(target: Cell) {
    if (this.figure?.canMove(target)) {
      this.figure?.moveFigure(target)
      if (target.figure) {
        this.addLostFigure(target.figure)
      }
      this.setFigure(this.figure)
      this.figure = null
    }
  }
}

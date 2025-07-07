import type { Board } from './Board.ts'
import type { Color } from './Colors.ts'
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
}

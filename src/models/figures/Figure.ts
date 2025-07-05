import type { Colors } from '../Colors.ts'
import logo from '../../assets/black-king.png'
import { type Cell } from '../Cell.ts'

export const FigureNames: Record<string, string> = {
  FIGURE: 'FIGURE',
  KING: 'KING',
  KNIGHT: 'KNIGHT',
  PAWN: 'PAWN',
  ROOK: 'ROOK',
  BISHOP: 'BISHOP',
  QUEEN: 'QUEEN',
}

export class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: keyof typeof FigureNames
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE.toString()
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    return true
  }

  moveFigure(target: Cell): void {}
}

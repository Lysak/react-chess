import type logo from '../../assets/black-king.png'
import type { Cell } from '../Cell.ts'
import type { Color } from '../Colors.ts'

// Define a union type for figure names.
export type FigureName =
  | 'figure'
  | 'king'
  | 'knight'
  | 'pawn'
  | 'rook'
  | 'bishop'
  | 'queen'

// Create a record that maps each key to its value
export const FigureNames: Record<Uppercase<FigureName>, FigureName> = {
  FIGURE: 'figure',
  KING: 'king',
  KNIGHT: 'knight',
  PAWN: 'pawn',
  ROOK: 'rook',
  BISHOP: 'bishop',
  QUEEN: 'queen',
}

export class Figure {
  color: Color
  logo: typeof logo | null
  cell: Cell
  name: FigureName
  id: number

  constructor(color: Color, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    return (
      !target.figure ||
      (target.figure.color !== this.color &&
        target.figure.name !== FigureNames.KING)
    )
  }

  moveFigure(target: Cell): void {
    console.log(target, `"lysak"`)
  }
}

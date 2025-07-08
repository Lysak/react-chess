import type logo from '../../assets/black-king.png'
import type { Cell } from '../Cell'
import type { Color } from '../Colors'

// Define a union type for figure names.
export type FigureName =
  | 'Figure'
  | 'King'
  | 'Knight'
  | 'Pawn'
  | 'Rook'
  | 'Bishop'
  | 'Queen'

// Create a record that maps each key to its value
export const FigureNames: Record<Uppercase<FigureName>, FigureName> = {
  FIGURE: 'Figure',
  KING: 'King',
  KNIGHT: 'Knight',
  PAWN: 'Pawn',
  ROOK: 'Rook',
  BISHOP: 'Bishop',
  QUEEN: 'Queen',
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

  moveFigure(target: Cell) {
    console.log(target, `"lysak"`)
  }
}

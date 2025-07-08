import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'
import type { Cell } from '../Cell.ts'
import { type Color, Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'

export class Queen extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    if (this.cell.isEmptyVertical(target)) {
      return true
    }

    if (this.cell.isEmptyHorizontal(target)) {
      return true
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }

    return false
    // return super.canMove(target)
  }
}

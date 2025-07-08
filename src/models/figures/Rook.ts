import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'
import type { Cell } from '../Cell.ts'
import { type Color, Colors } from '../Colors.ts'
import { Figure, FigureNames } from './Figure.ts'

export class Rook extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
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

    return false
  }
}

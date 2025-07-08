import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'
import type { Cell } from '../Cell'
import { type Color, Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Bishop extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true
    }

    return false
  }
}
